<template>
  <main>
    <CreateTemplate @refresh="templateStore.fetchTemplates()" />

    <section>
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
