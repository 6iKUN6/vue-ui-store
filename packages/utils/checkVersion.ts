import axios from 'axios';
// import consola from 'consola';

// 添加全局变量的类型声明
declare global {
  interface Window {
    __GIT_REVISION_INFO__?: any;
  }
}

const CURRENT_VERSION_KEY = 'current_verison';

const getConfig = () => {
  return new Promise<Record<string, string>>(resolve => {
    axios
      .get('/config.json', {
        params: {
          _t: Date.now()
        }
      })
      .then((res: any) => {
        resolve(res.data);
      });
  });
};

export async function checkVersion(
  newVersionCallback?: (newVersion: string, oldVersion: string) => void
): Promise<boolean | undefined> {
  if (!window.__GIT_REVISION_INFO__) {
    //插件有加载的话就会有这个全局变量
    //没有直接的话直接警告
    console.warn('没有加载gitRevisionInfoPlugin插件，无法检查版本');
    return;
  }

  const config = await getConfig();
  const newVersion = config.version;
  const oldVersion = localStorage.getItem(CURRENT_VERSION_KEY);

  if (!oldVersion) {
    localStorage.setItem(CURRENT_VERSION_KEY, newVersion);

    return false;
  }

  if (newVersion !== oldVersion) {
    // console.log('有新版本，请刷新页面')
    //TODO 更新版本
    if (newVersionCallback) {
      localStorage.setItem(CURRENT_VERSION_KEY, newVersion);
      newVersionCallback(newVersion, oldVersion);
    } else {
      console.info('有新版本，请刷新页面');
    }
  }

  return newVersion !== oldVersion;
}
