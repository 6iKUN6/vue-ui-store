import { UploadProgressEvent } from './upload';
import { RequestOptions } from './upload-content';

export function httpRequest(options: RequestOptions) {
  const xhr = new XMLHttpRequest();
  const { action } = options;

  xhr.open(options.method, action, true);

  xhr.upload.addEventListener('progress', e => {
    const processEvents = e as UploadProgressEvent;
    processEvents.pecetange = e.total > 0 ? (e.loaded / e.total) * 100 : 0;
    options.onProgress(processEvents); //call on-progress
  });

  //add request headers
  const headers = options.headers;
  if (headers) {
    for (const [key, value] of Object.entries(headers)) {
      xhr.setRequestHeader(key, value);
    }
  }

  //add reques data
  const formData = new FormData();
  if (options.data) {
    for (const [key, value] of Object.entries(options.data)) {
      formData.append(key, value);
    }
  }

  formData.append(options.name, options.file);

  xhr.onload = () => {
    if (xhr.status < 300 && xhr.status >= 200) {
      options.onSuccess(xhr.response);
    } else {
      options.onError({
        status: xhr.status,
        statusText: xhr.statusText,
        response: xhr.response
      });
    }
  };

  xhr.addEventListener('error', err => {
    options.onError(err);
  });

  xhr.send(formData);

  return xhr;
}
