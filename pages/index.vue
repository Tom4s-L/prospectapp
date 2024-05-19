<template>
  <main>
    <ClientOnly>
      <UForm
        :schema="schema"
        :state="state"
        class="flex flex-col gap-8"
        @submit="onSubmit"
        @invalid="onInvalid"
      >
        <UFormGroup
          label="Template Name"
          name="templateName"
          class="label-margin"
        >
          <UInput v-model="state.templateName" :class="{ 'input-error': errors.templateName }" />
          <span v-if="errors.templateName" class="error-message">{{ errors.templateName }}</span>
        </UFormGroup>
        <UFormGroup
          label="Mail object"
          name="mailObject"
          class="label-margin"
        >
          <UInput v-model="state.mailObject" :class="{ 'input-error': errors.mailObject }" />
          <span v-if="errors.mailObject" class="error-message">{{ errors.mailObject }}</span>
        </UFormGroup>
        <UFormGroup
          label="Template content"
          name="mailContent"
          class="label-margin"
        >
          <QuillEditor
            id="body"
            v-model:content="state.mailContent"
            :class="{ 'input-error': errors.mailContent }"
          />
          <span v-if="errors.mailContent" class="error-message">{{ errors.mailContent }}</span>
        </UFormGroup>
        <UButton type="submit">
          Button
        </UButton>
      </UForm>
    </ClientOnly>

    <pre>{{ state }}</pre>
    <pre>{{ templates }}</pre>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const schema = z.object({
  templateName: z.string().min(1, 'Template name is required'),
  mailObject: z.string().min(1, 'Mail object is required'),
  mailContent: z.string()
    .transform(val => val.trim() === '<p><br></p>' ? '' : val)
    .refine(val => val.length > 0, 'At least one character is required'),
});

type Schema = z.output<typeof schema>

const state = reactive({
  templateName: '',
  mailObject: '',
  mailContent: '',
});

const errors = reactive({
  templateName: '',
  mailObject: '',
  mailContent: '',
});

function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log(event.data);
  clearErrors();
}

function onInvalid(errorsList: Array<{ path: string, message: string }>) {
  clearErrors();
  errorsList.forEach((error) => {
    errors[error.path as keyof typeof errors] = error.message;
  });
}

function clearErrors() {
  for (const key in errors)
    errors[key as keyof typeof errors] = '';
}

const { data: templates } = await useAsyncData('fetchData', () => $fetch('/api/template'));
</script>

<style scoped>
.input-error {
  border-color: red;
}
.error-message {
  color: red;
  font-size: 0.875em;
}
</style>
