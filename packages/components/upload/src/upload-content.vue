<template>
  <div :class="[bem.b()]" @click="handleClick">
    <template v-if="drag">
      <UploadDragger @file="handleDragUpload">
        <slot></slot>
      </UploadDragger>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <input
      ref="inpRef"
      type="file"
      :name="name"
      :accept="accept"
      :multiple="multiple"
      @change="handleChange"
      :class="[bem.e('input')]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createNamespace } from '@sp-ui/utils/create';

import UploadDragger from './upload-dragger.vue';
import { genId, UploadRawFile } from './upload';
import { uploadContentProps } from './upload-content';
import { httpRequest } from './ajax';

defineOptions({
  name: 'sp-upload-content'
});
const bem = createNamespace('upload');
const props = defineProps(uploadContentProps);
const inpRef = ref<HTMLInputElement>();

const handleClick = () => {
  if (inpRef.value) {
    inpRef.value.value = '';
    inpRef.value.click();
  }
};

async function upload(file: UploadRawFile) {
  if (inpRef.value) {
    inpRef.value.value = '';
    const result = await props.beforeUpload(file);
    if (result === false) return props.onRemove(file);

    // call ajax request
    const { method, name, action, headers, data } = props;

    httpRequest({
      method,
      file,
      name,
      action,
      headers,
      data,
      onError: err => {
        props.onError(err, file);
      },
      onSuccess: res => {
        props.onSuccess(res, file);
      },
      onProgress: e => {
        props.onProgress(e, file);
      }
    });
  }
}

function uploadFiles(files: UploadRawFile[]) {
  for (let i = 0; i < files.length; i++) {
    const rawFile = files[i] as UploadRawFile;
    rawFile.uid = genId();
    props.onStart(rawFile);

    upload(rawFile);
  }
}

const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files || [];
  uploadFiles(files as UploadRawFile[]);
};

const handleDragUpload = (files: UploadRawFile[]) => {
  uploadFiles(files);
};
</script>

<style scoped></style>
