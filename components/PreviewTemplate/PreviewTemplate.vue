<template>
  <div class="flex items-center gap-2 rounded-md p-3 bg-cool-800">
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

        <div class="bg-cool-800 p-3 rounded-md" v-html="props.template.mailObject" />
        <div class="mt-6" v-html="props.template.mailContent" />
      </UCard>
    </umodal>
    <NuxtImg
      src="/svg/template.svg"
      alt="Template SVG"
      class="w-20"
    />
    <div>
      <p>Name: {{ props.template.name }}</p>
      <p>Created at: {{ formatDate(new Date(props.template.createdAt)) }}</p>
    </div>
    <UButton
      icon="i-heroicons-eye"
      size="2xs"
      class="ml-auto"
      @click="modalIsOpen = true"
    >
      View
    </UButton>
  </div>
</template>

<script setup lang="ts">
import type { TemplateModel } from '~/models/template.model';

const props = defineProps({
  template: {
    type: Object as PropType<TemplateModel>,
    required: true,
  },
});

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
</script>

<style scoped>

</style>
