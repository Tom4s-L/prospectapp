import { defineStore } from 'pinia';
import { TemplateModel } from '~/models/template.model';

export const useTemplateStore = defineStore('template', {
  state: (): { templates: TemplateModel[], currentTemplate: TemplateModel | null } => ({
    templates: [],
    currentTemplate: null,
  }),
  actions: {
    async fetchTemplates() {
      try {
        const { data } = await useFetch('/api/template');
        const templates = data.value?.data || [];
        this.templates = templates.map((template: any) => {
          // Convert TemplateModel instance to plain object
          return { ...TemplateModel.fromRow(template) };
        });
      }
      catch (error) {
        console.error('Error fetching templates:', error);
      }
    },
  },
});
