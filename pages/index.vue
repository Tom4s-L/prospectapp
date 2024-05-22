<template>
  <main class="h-dvh flex flex-col gap-6">
    <h2>Templates</h2>
    <div class="flex justify-end">
      <UpsertTemplate />
    </div>

    {{ templates.length }} elements
    <div class="flex flex-col gap-3 max-h-80 rounded-md overflow-auto p-3 bg-cool-700">
      <PreviewTemplate
        v-for="template in templates"
        :key="template.id"
        :template="template"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import UpsertTemplate from '~/components/UpsertTemplate/UpsertTemplate.vue';

const templateStore = useTemplateStore();

const templates = computed(() => templateStore.templates);

onBeforeMount(async () => {
  await templateStore.fetchTemplates();
});
</script>

<style scoped>
</style>
