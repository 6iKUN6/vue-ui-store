<template>
  <uploadContent v-bind="uploadContentProps">
    <slot></slot>
  </uploadContent>
  <!-- list -->
  <!-- preview> -->
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import { UploadFile, UploadFiles, uploadProps, UploadRawFile } from './upload';
import uploadContent from './upload-content.vue';
import { UploadContentProps } from './upload-content';

defineOptions({
  name: 'sp-upload'
});
const props = defineProps(uploadProps);
const emits = defineEmits(['onUpdate:file-list']);

const uploadFiles = ref<UploadFiles>(props.fileList);
watch(
  () => uploadFiles,
  newV => {
    emits('onUpdate:file-list', newV);
  }
);

const findFile = (rawFile: UploadRawFile) =>
  uploadFiles.value.find(file => file.uid === rawFile.uid);

//diynamic props
const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  onStart: rawFile => {
    const uploadFile: UploadFile = {
      uid: rawFile.uid,
      name: rawFile.name,
      // url:new Object
      percentage: 0,
      raw: rawFile,
      size: rawFile.size,
      status: 'start'
    };
    uploadFile.url = URL.createObjectURL(rawFile); // preview
    uploadFiles.value = [...uploadFiles.value, uploadFile];
    props.onChange(uploadFile);
  },
  onProgress: (e, rawFile) => {
    const uploadFile = findFile(rawFile)!;
    uploadFile.status = 'uploading';
    uploadFile.percentage = Math.floor((e.loaded / e.total) * 100);
    props.onProgress(e, uploadFile, uploadFiles.value);
  },
  onError: (err, rawFile) => {
    const uploadFile = findFile(rawFile)!;
    const fileList = uploadFiles.value;
    fileList.splice(fileList.indexOf(uploadFile), 1);
    props.onError(err, uploadFile, fileList);
  },
  onSuccess: (res, rawFile) => {
    const uploadFile = findFile(rawFile)!;
    uploadFile.status = 'done';
    const fileList = uploadFiles.value;
    props.onSuccess(res, uploadFile, fileList);
  },
  onRemove: async rawFile => {
    const uploadFile = findFile(rawFile)!;
    const r = await props.beforeRemove(uploadFile, uploadFiles.value);
    if (r !== false) {
      const fileList = uploadFiles.value;
      fileList.splice(fileList.indexOf(uploadFile), 1);
      props.onRemove(uploadFile, fileList);
    }
  }
}));
</script>

<style scoped></style>
