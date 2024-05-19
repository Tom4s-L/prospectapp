<template>
  <main>
    <ClientOnly>
      <UForm :state="state" class="flex flex-col gap-8">
        <UFormGroup
          label="Template Name"
          name="templateName"
          class="label-margin"
        >
          <UInput v-model="state.templateName" />
        </UFormGroup>
        <UFormGroup
          label="Template content"
          name="body"
          class="label-margin"
        >
          <QuillEditor id="body" v-model:content="state.body" />
        </UFormGroup>
        <UButton @click="test">
          Button
        </UButton>
      </UForm>
    </ClientOnly>
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
  console.log(state);
}
</script>

<style scoped>
</style>
