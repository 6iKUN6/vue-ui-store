import { ExtractPropTypes, PropType } from 'vue';

import {
  baseProps,
  UploadProgressEvent,
  uploadProps,
  UploadRawFile
} from './upload';

const NOOP = () => {};

export const uploadContentProps = {
  ...baseProps,
  beforeUpload: uploadProps['beforeUpload'],
  onStart: {
    type: Function as PropType<(_file: UploadRawFile) => void>,
    default: NOOP
  },
  onProgress: {
    type: Function as PropType<
      (_e: UploadProgressEvent, _rawFile: UploadRawFile) => void
    >,
    default: NOOP
  },
  onRemove: {
    type: Function as PropType<(_file: UploadRawFile) => void>,
    default: NOOP
  },
  onSuccess: {
    type: Function as PropType<
      (_response: any, _rawFile: UploadRawFile) => void
    >,
    default: NOOP
  },
  onError: {
    type: Function as PropType<(_err: any, _rawFile: UploadRawFile) => void>,
    default: NOOP
  }
} as const;

export type UploadContentProps = Required<
  ExtractPropTypes<typeof uploadContentProps>
>;

export interface RequestOptions {
  method: string;
  file: File;
  name: string;
  action: string;
  headers: Headers;
  data: Record<string, any>;
  onError: (_e: any) => void;
  onSuccess: (_e: any) => void;
  onProgress: (_e: UploadProgressEvent) => void;
}
