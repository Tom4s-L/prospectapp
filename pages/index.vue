<template>
  <main>
    <ClientOnly>
      <UForm :state="state">
        <UFormGroup label="Template Name" name="templateName">
          <UInput v-model="state.templateName" />
        </UFormGroup>
        <UFormGroup label="Template content" name="body">
          <QuillEditor id="body" v-model:content="state.body" />
        </UFormGroup>
        <UButton>Button</UButton>
      </UForm>
    </ClientOnly>

    <UButton @click="test">
      Test
    </UButton>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const state = reactive({
  templateName: '',
  body: '',
});

function test() {
  state.body = '<h1>Test</h1><p>Ceci est un test les mecs</p>';
}
</script>

<style scoped>
</style>
