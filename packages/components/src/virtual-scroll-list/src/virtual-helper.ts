import { RangeOptions, updateType, VirtualOptions } from './virtual-props';

//元素高度处理
export const enum CALC_TYPE {
  INIT = 'INIT',
  FIXED = 'FIXED',
  DYNAMIC = 'DYNAMIC'
}

export const initVirtual = (params: VirtualOptions, update: updateType) => {
  let offsetValue = 0;
  let caclType = CALC_TYPE.INIT;
  let fixedSizeVal = 0;
  let firstRangeAvg = 0;
  const range: RangeOptions = {
    start: 0,
    end: 0,
    padFront: 0,
    padBehind: 0
  };

  function isFixedSize() {
    return caclType === CALC_TYPE.FIXED;
  }

  function getEstimateSize() {
    return isFixedSize() ? fixedSizeVal : firstRangeAvg || params.estimateSize;
  }

  function getIndexOffset(idx: number) {
    if (!idx) return 0;
    let offet = 0;
    for (let i = 0; i < idx; i++) {
      const currSize = sizes.get(params.uniqueIds[i]);
      offet += typeof currSize === 'number' ? currSize : getEstimateSize();
    }

    return offet;
  }

  function getPadFront() {
    //上偏移量
    if (isFixedSize()) {
      return fixedSizeVal * range.start;
    } else {
      //将滚动的元素累加
      return getIndexOffset(range.start);
    }
  }

  function getPadBehind() {
    //下偏移量
    const lastIndex = params.uniqueIds.length - 1;
    return (lastIndex - range.end) * getEstimateSize();
  }

  //更新代码
  function updateRange(start: number, end: number) {
    range.start = start;
    range.end = end;
    range.padFront = getPadFront();
    range.padBehind = getPadBehind();

    update({ ...range });
  }

  function checkRange(start: number, end: number) {
    const total = params.uniqueIds.length;
    const keeps = params.keeps;
    if (total < keeps) {
      start = 0;
      end = total - 1;
    } else if (end - start < keeps - 1) {
      //限制显示范围
      start = end - keeps + 1;
    }

    updateRange(start, end);
  }

  function getScrollOvers() {
    //偏移量/每项的高度
    if (isFixedSize()) {
      return Math.floor(offsetValue / getEstimateSize());
    } else {
      //获取最接近的滚动的那一下，计算每一项的偏移量，看与那一项最接近
      //二分查找
      let low = 0;
      let high = params.uniqueIds.length;
      let middle = 0;
      let middleOffset = 0;
      while (low <= high) {
        middle = Math.floor((low + high) / 2);
        middleOffset = getIndexOffset(middle);
        if (middleOffset > offsetValue) {
          high = middle - 1;
        } else if (middleOffset < offsetValue) {
          low = middle + 1;
        } else {
          return middle;
        }
      }

      return low > 0 ? --low : 0;
    }
  }

  function getEndByStart(start: number) {
    const computeEnd = start + params.keeps - 1;
    const end = Math.min(computeEnd, params.uniqueIds.length - 1);
    return end;
  }

  function handleFront() {
    //获取划过了多少个
    const overs = getScrollOvers();
    if (overs > range.start) {
      return;
    }

    const start = Math.max(overs - params.buffer, 0);
    checkRange(start, getEndByStart(start));
  }

  function handleBehind() {
    const overs = getScrollOvers();
    if (overs < range.start + params.buffer) {
      //向下加载的时候看看是否在缓存区中,是则无需加载
      return;
    }

    checkRange(overs, getEndByStart(overs));
  }

  function handleScroll(offet: number) {
    //先判断是上滚还是下滚
    const direction = offet < offsetValue ? 'FRONT' : 'BEHIND';
    offsetValue = offet;
    if (direction === 'FRONT') {
      handleFront();
    } else if (direction === 'BEHIND') {
      handleBehind();
    }
  }

  //记录每个item的size
  const sizes = new Map<string | number, number>();

  function saveSize(id: string | number, size: number) {
    sizes.set(id, size);
    //加载的时候一个个看是fixed还是dynamic,默认是fixed
    if (caclType === CALC_TYPE.INIT) {
      fixedSizeVal = size;
      caclType = CALC_TYPE.FIXED;
    } else if (caclType === CALC_TYPE.FIXED && fixedSizeVal !== size) {
      caclType = CALC_TYPE.DYNAMIC;
      fixedSizeVal = 0;
    }

    if (caclType == CALC_TYPE.DYNAMIC) {
      //不定高算平均值撑开滚动条
      if (sizes.size < Math.min(params.uniqueIds.length, params.keeps)) {
        firstRangeAvg = Math.round(
          [...sizes.values()].reduce((prev, curr) => prev + curr, 0) /
            sizes.size
        );
      }
    }
  }

  checkRange(0, params.keeps - 1);
  return {
    handleScroll,
    saveSize,
    caclType
  };
};

/* 
1)固定高度的上pading 可以利用 开始范围前面的个数 * 每项的高度
2)下padding 可以利用 总个数 - 当前显示到的个数 * 每项的高度

动态高度(默认要先计算一下滚动条大致多高，根据已经加载的数据尽可能的预估一个滚动条)
1)上padding (会默认记录每一项的高度) 根据当前的start来累计start之前每一项的高度
2)下padding 用 (总个数 - 当前显示到的个数) * 预估的高度

当前开始滚动 固定高度可以直接采用 偏移量 / 每项的高度来计算要展现的start
动态的开始位置 需要采用二分查找找到已经加载的哪一项的偏移量和当前的最接近，找到后返回当前的start
 */
