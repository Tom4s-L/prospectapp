<template>
  <UButton
    :label="props.buttonLabel"
    :icon="props.buttonIcon"
    :color="props.buttonColor"
    :size="props.buttonSize"
    @click="openModal"
  />

  <ClientOnly>
    <UModal v-model="modalIsOpen" :ui="{ width: 'sm:max-w-[768px]' }">
      <div class="p-4">
        <UForm
          :schema="schema"
          :state="state"
          class="flex flex-col gap-8"
          @submit="onSubmit"
          @invalid="onInvalid"
        >
          <UFormGroup
            label="Firstname"
            name="firstname"
            class="label-margin"
            required
          >
            <UInput v-model="state.firstname" />
            <span v-if="errors.firstname">{{ errors.firstname }}</span>
          </UFormGroup>
          <UFormGroup
            label="Lastname"
            name="lastname"
            class="label-margin"
            required
          >
            <UInput v-model="state.lastname" />
            <span v-if="errors.lastname">{{ errors.lastname }}</span>
          </UFormGroup>
          <UFormGroup
            label="Email"
            name="email"
            class="label-margin"
            required
          >
            <UInput v-model="state.email" />
            <span v-if="errors.email">{{ errors.email }}</span>
          </UFormGroup>
          <UFormGroup
            label="Type"
            name="type"
            class="label-margin"
            required
          >
            <UInput v-model="state.type" />
            <span v-if="errors.type">{{ errors.type }}</span>
          </UFormGroup>
          <UButton type="submit" class="ml-auto">
            Validate
          </UButton>
        </UForm>
      </div>
    </UModal>
  </ClientOnly>
</template>

<script setup lang="ts">
import { z } from 'zod';

const props = defineProps({
  buttonLabel: {
    type: String,
    default: 'Create new',
  },
  buttonIcon: {
    type: String,
    default: undefined,
  },
  buttonColor: {
    type: String,
    default: undefined,
  },
  buttonSize: {
    type: String,
    default: '2xs',
  },
});

const modalIsOpen = ref(false);
const state = reactive({
  firstname: '',
  lastname: '',
  email: '',
  type: '',
});
const schema = z.object({
  firstname: z.string({ required_error: 'Firstname is required' }).min(1, 'At least one character is needed'),
  lastname: z.string({ required_error: 'Lastname is required' }).min(1, 'At least one character is needed'),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email'),
  type: z.string({ required_error: 'Type is required' }).min(1, 'At least one character is needed'),
});
const errors = reactive({
  firstname: '',
  lastname: '',
  email: '',
  type: '',

});

function openModal() {
  modalIsOpen.value = true;
}
async function onSubmit() {
  console.log('submit');
}
function onInvalid(errorsList: Array<{ path: string, message: string }>) {
  clearErrors();
  errorsList.forEach((error) => {
    errors[error.path as keyof typeof errors] = error.message;
  });
}
</script>

<style scoped>

</style>
