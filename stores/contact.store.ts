import type { ContactModel } from '~/models';

export const useContactStore = defineStore('contact', {
  state: (): { contacts: ContactModel[], currentContact: ContactModel | null } => ({
    contacts: [],
    currentContact: null,
  }),
});
