<template>
  <main class="h-dvh flex flex-col gap-6">
    <h2>Contacts</h2>
    <div class="flex justify-end">
      <UpsertContact />
    </div>
  </main>
</template>

<script setup lang="ts">
import UpsertContact from '~/components/Contact/UpsertContact/UpsertContact.vue';
</script>

<style scoped>

</style>
