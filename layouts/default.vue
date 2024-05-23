<template>
  <div class="h-dvh flex">
    <UVerticalNavigation
      :links="links"
      :ui="{
        wrapper: 'bg-cool-800 pl-2 pr-4',
        base: 'mt-4',
      }"
    />
    <div class="flex-grow">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    label: 'Templates',
    icon: 'i-heroicons-document',
    to: '/template',
  },
  {
    label: 'Contacts',
    icon: 'i-heroicons-user',
    to: '/contact',
  },
  {
    label: 'Campaigns',
    icon: 'i-heroicons-envelope',
    to: '/campaign',
  },
];
</script>

<style scoped>

</style>
