import { ExtractPropTypes, PropType } from 'vue';

/* 
file-list
action
limit
multiple
*/

export type LoadStatus = 'uploading' | 'done' | 'error' | 'start';

export interface UploadFile {
  uid?: number;
  name: string;
  // file: File;
  url?: string;
  percentage?: number;
  raw?: File;
  size?: number;
  status?: LoadStatus;
}

export type UploadFiles = UploadFile[];

export type Awaitable<T> = Promise<T>;

export const baseProps = {
  fileList: {
    type: Array as PropType<UploadFiles>,
    default: () => [] as const
  },
  limit: {
    type: Number,
    default: 5
  },
  action: {
    type: String,
    default: ''
  },
  multiple: {
    type: Boolean,
    default: false
  },
  //input element props
  name: {
    type: String,
    default: 'file'
  },
  accept: {
    type: String,
    default: ''
  },
  //ajax
  method: {
    type: String,
    default: 'post'
  },
  headers: {
    type: Object as PropType<Headers>,
    default: () => {}
  },
  data: {
    type: Object as PropType<Record<string, string>>,
    default: () => {}
  },
  drag: {
    type: Boolean,
    default: true
  }
} as const;

export type UploadRawFile = File & { uid: number }; //provide for rawFile
export type UploadProgressEvent = ProgressEvent & { pecetange: number };
const NOOP = () => {};

export const uploadProps = {
  ...baseProps,
  autoLoad: {
    type: Boolean,
    default: true
  },
  onPreview: {
    //预览
    type: Function as PropType<(_file: UploadFile) => void>,
    default: NOOP
  },
  onChange: {
    type: Function as PropType<(_file: UploadFile) => void>,
    default: NOOP
  },
  onProgress: {
    type: Function as PropType<
      (
        _file: UploadProgressEvent,
        _uploadFile: UploadFile,
        _uploadFiles: UploadFiles
      ) => void
    >,
    default: NOOP
  },
  onSuccess: {
    type: Function as PropType<
      (
        _response: any,
        _uploadFile: UploadFile,
        _uploadFiles: UploadFiles
      ) => void
    >,
    default: NOOP
  },
  onError: {
    type: Function as PropType<
      (_err: any, _uploadFile: UploadFile, _uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },
  onRemove: {
    type: Function as PropType<
      (_uploadFile: UploadFile, _uploadFiles: UploadFiles) => void
    >,
    default: NOOP
  },
  beforeRemove: {
    type: Function as PropType<
      (_file: UploadFile, _files: UploadFiles) => Awaitable<boolean> | boolean
    >,
    default: NOOP
  },
  beforeUpload: {
    type: Function as PropType<
      (
        _file: UploadRawFile
      ) => Awaitable<void | boolean | undefined | null | boolean | File | Blob>
    >,
    default: NOOP
  }
} as const;

export type UploadProps = Partial<ExtractPropTypes<typeof uploadProps>>;

let id = 0;
export function genId(): number {
  return id++;
}
