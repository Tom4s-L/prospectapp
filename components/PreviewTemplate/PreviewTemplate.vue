<template>
  <div>
    <div v-html="props.template.mailContent" />
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
</script>

<style scoped>

</style>
