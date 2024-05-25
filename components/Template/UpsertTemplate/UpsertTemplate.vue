<template>
  <UButton
    :label="props.buttonLabel"
    :icon="props.buttonIcon"
    :color="props.buttonColor"
    :size="props.buttonSize"
    @click="openModal"
  />

  <ClientOnly>
    <UModal v-model="modalIsOpen" :ui="{ width: 'sm:max-w-[768px]' }">
      <div class="p-4">
        <UForm
          :schema="schema"
          :state="state"
          class="flex flex-col gap-8"
          @submit="
            onSubmit"
          @invalid="onInvalid"
        >
          <UFormGroup
            label="Template Name"
            name="templateName"
            class="label-margin"
            required
          >
            <UInput v-model="state.templateName" />
            <span v-if="errors.templateName">{{ errors.templateName }}</span>
          </UFormGroup>
          <UFormGroup
            label="Mail object"
            name="mailObject"
            class="label-margin"
            required
          >
            <UInput v-model="state.mailObject" />
            <span v-if="errors.mailObject">{{ errors.mailObject }}</span>
          </UFormGroup>
          <UFormGroup
            label="Template content"
            name="mailContent"
            class="label-margin"
            required
          >
            <QuillEditor
              id="body"
              v-model:content="state.mailContent"
              :class="{ 'input-error': errors.mailContent }"
            />
            <span v-if="errors.mailContent">{{ errors.mailContent }}</span>
          </UFormGroup>
          <UButton type="submit" class="ml-auto">
            Validate
          </UButton>
        </UForm>
      </div>
    </UModal>
  </ClientOnly>
</template>

<script setup lang="ts">
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import { reactive } from 'vue';
import { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

const props = defineProps({
  editMode: {
    type: Boolean,
    default: false,
  },
  templateId: {
    type: String,
    default: undefined,
  },
  buttonLabel: {
    type: String,
    default: 'Create new',
  },
  buttonIcon: {
    type: String,
    default: undefined,
  },
  buttonColor: {
    type: String,
    default: undefined,
  },
  buttonSize: {
    type: String,
    default: '2xs',
  },
});

type Schema = z.output<typeof schema>;
const schema = z.object({
  templateName: z.string().min(1, 'PreviewTemplate name is required'),
  mailObject: z.string().min(1, 'Mail object is required'),
  mailContent: z.string()
    .transform(val => val.trim() === '<p><br></p>' ? '' : val)
    .refine(val => val.length > 0, 'At least one character is required'),
});
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
const modalIsOpen = ref(false);
const templateStore = useTemplateStore();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  if (props.editMode && props.templateId) {
    await $fetch(`/api/template?templateId=${props.templateId}`, {
      method: 'PATCH',
      body: {
        name: event.data.templateName,
        mailObject: event.data.mailObject,
        mailContent: event.data.mailContent,
      },
    });
    console.log('Updated');
  }
  else {
    await $fetch('/api/template', {
      method: 'POST',
      body: {
        name: event.data.templateName,
        mailObject: event.data.mailObject,
        mailContent: event.data.mailContent,
      },
    });
    console.log('Created');
  }
  clearState();
  clearErrors();
  modalIsOpen.value = false;
  templateStore.currentTemplate = null;
  await templateStore.fetchTemplates();
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
function clearState() {
  state.templateName = '';
  state.mailObject = '';
  state.mailContent = '';
}
function setFieldsFromTemplateStore(templateId: string) {
  templateStore.setCurrentTemplate(templateId);
  if (templateStore.currentTemplate) {
    const currentTemplate = templateStore.currentTemplate;
    state.templateName = currentTemplate.name;
    state.mailObject = currentTemplate.mailObject;
    state.mailContent = currentTemplate.mailContent;
  }
}
function openModal() {
  if (props.editMode && props.templateId)
    setFieldsFromTemplateStore(props.templateId);
  modalIsOpen.value = true;
}
</script>

<style scoped>
</style>
