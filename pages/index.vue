<template>
  <ClientOnly>
    <UForm :state="state">
      <UFormGroup label="Template Name" name="templateName">
        <UInput v-model="state.templateName" />
      </UFormGroup>
      <UFormGroup label="Template content" name="body">
        <QuillEditor id="body" v-model:content="body"/>
      </UFormGroup>
      <UButton>Button</UButton>
    </UForm>
  </ClientOnly>

  <h2>Preview</h2>
  <div class="quill-preview ql-container ql-snow">
    <div class="ql-editor" v-html="body"></div>
  </div>

</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';  // Import des styles Quill

const state = reactive({
  templateName: '',
});
const body = ref('');
</script>

<style scoped>
.quill-preview {
  margin-top: 20px;
  border: 1px solid #ccc;
}
</style>
