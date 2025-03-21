<template>
  <div>
    <sp-upload
      :before-upload="handleBeforeUpload"
      :action="'http://localhost:3000/upload/files'"
      method="POST"
    >
      <sp-button>点我上传</sp-button>
    </sp-upload>
  </div>
</template>

<script setup lang="ts">
import { type UploadRawFile } from 'sp-ui-store';

const handleBeforeUpload = (rawFile: UploadRawFile) => {
  console.log('handleBeforeUpload', rawFile);
  return Promise.resolve(true);
};
</script>

<style scoped></style>
