<template>
  <QuillEditor :options="options" contentType="html" />
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill';


var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike', 'image'],
  ['blockquote', 'code-block'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  ['clean']
];
const options = ref({
  modules: {
    toolbar: toolbarOptions
  },
  placeholder: 'Compose here...',
  readOnly: false,
  // theme: 'bubble'
});
</script>

<style>
.ql-container {
  min-height: 100px;
  height: 100%;
  border-radius: 0 0 10px 10px;
}
.ql-editor{
  min-height: 200px;
  height: 100%;
  background-color: #101826;
}
.ql-toolbar {
  background-color: #212121;
  border-radius: 10px 10px 0 0;
}
</style>
