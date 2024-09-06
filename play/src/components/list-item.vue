<template>
  <div
    class="item"
    :data-index="source.index"
    style="font-size: 25px; margin: 20px 0; background-color: skyblue"
  >
    <div class="head">
      <span>{{ source.index }}</span>
      <span>{{ source.name }}</span>
    </div>
    <div class="body">
      {{ source.desc }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  source: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped></style>
