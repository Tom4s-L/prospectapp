<template>
  <div class="flex items-center gap-2 flex-wrap rounded-md p-3 bg-cool-800">
    <NuxtImg
      src="/svg/template.svg"
      alt="Template SVG"
      class="w-20"
    />
    <div>
      <p>Name: {{ props.template.name }}</p>
      <p>Created at: {{ formatDate(new Date(props.template.createdAt)) }}</p>
    </div>

    <div class="flex gap-2 ml-auto">
      <UpsertTemplate
        button-icon="i-heroicons-pencil-square"
        button-color="gray"
        button-label="Edit"
        :edit-mode="true"
        :template-id="props.template.id"
      />
      <UButton
        icon="i-heroicons-eye"
        size="2xs"
        @click="modalIsOpen = true"
      >
        Preview
      </UButton>
    </div>
    <div class="w-full flex justify-end">
      <ULink
        type="button"
        class="text-red-500"
        @click="deleteTemplate"
      >
        Delete
      </ULink>
    </div>
  </div>

  <UModal
    v-model="modalIsOpen"
    :ui="{ width: 'sm:max-w-[768px]' }"
  >
    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">
          {{ props.template.name }}
        </h2>
      </template>

      <div class="flex flex-col gap-6">
        <div>
          E-mail object:
          <div class="bg-cool-800 p-3 mt-3 rounded-md" v-html="props.template.mailObject" />
        </div>

        <div>
          E-mail content:
          <div class="bg-cool-800 p-3 mt-3 rounded-md" v-html="props.template.mailContent" />
        </div>
      </div>
    </UCard>
  </umodal>
</template>

<script setup lang="ts">
import type { TemplateModel } from '~/models/template.model';
import UpsertTemplate from '~/components/Template/UpsertTemplate/UpsertTemplate.vue';

const props = defineProps({
  template: {
    type: Object as PropType<TemplateModel>,
    required: true,
  },
});
const templateStore = useTemplateStore();

const modalIsOpen = ref(false);

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString('en-EN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}
async function deleteTemplate() {
  await templateStore.deleteTemplate(props.template.id);
}
</script>

<style scoped>

</style>
