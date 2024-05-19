<template>
  <QuillEditor :options="options" content-type="html" />
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike', 'image'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ size: ['small', false, 'large', 'huge'] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  ['clean'],
];
const options = ref({
  modules: {
    toolbar: toolbarOptions,
  },
  readOnly: false,
});
</script>

<style>

</style>
