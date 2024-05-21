<template>
  <main>
    <!--    <CreateTemplate @refresh="refreshTemplates" /> -->

    <section>
      <pre>{{ templates }}</pre>
    </section>
  </main>
</template>

<script setup lang="ts">
const templateStore = useTemplateStore();
await templateStore.fetchTemplates();

const templates = computed(() => templateStore.templates);
</script>

<style scoped>

</style>
