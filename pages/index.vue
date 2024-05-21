<template>
  <main>
    <CreateTemplate @refresh="templateStore.fetchTemplates()" />

    <section class="flex flex-wrap gap-6">
      <PreviewTemplate
        v-for="template in templates"
        :key="template.id"
        :template="template"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
const templateStore = useTemplateStore();

const templates = computed(() => templateStore.templates);

onBeforeMount(async () => {
  await templateStore.fetchTemplates();
});
</script>

<style scoped>
</style>
