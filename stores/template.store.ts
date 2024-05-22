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
        const response = await $fetch('/api/template');
        const templates = response?.data || [];
        this.templates = templates.map((template: any) => {
          return { ...TemplateModel.fromRow(template) };
        });
      }
      catch (error) {
        console.error('Error fetching templates:', error);
      }
    },
    setCurrentTemplate(templateId: string) {
      this.currentTemplate = this.templates.find(template => template.id === templateId) || null;
    },
  },
});
