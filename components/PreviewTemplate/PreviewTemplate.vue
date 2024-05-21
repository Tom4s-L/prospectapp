<template>
  <div class="flex flex-col gap-2 items-center">
    <NuxtImg
      src="/svg/template.svg"
      alt="Template SVG"
      class="w-20"
    />
    <div>
      <p>Name: {{ props.template.name }}</p>
      <p>Created at: {{ formatDate(new Date(props.template.createdAt)) }}</p>
    </div>
    <UButton icon="i-heroicons-eye" size="2xs">
      View
    </UButton>
  </div>
<!--  <pre>{{ props.template }}</pre> -->
</template>

<script setup lang="ts">
import type { TemplateModel } from '~/models/template.model';

const props = defineProps({
  template: {
    type: Object as PropType<TemplateModel>,
    required: true,
  },
});

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
