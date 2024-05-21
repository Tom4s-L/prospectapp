interface TemplateModelProps {
  _id: string
  name: string
  mailObject: string
  mailContent: string
}

export class TemplateModel {
  id: string = '';
  name: string = '';
  mailObject: string = '';
  mailContent: string = '';

  static fromRow(row: TemplateModelProps) {
    return Object.assign(new TemplateModel(), {
      id: row._id.toString(),
      name: row.name,
      mailObject: row.mailObject,
      mailContent: row.mailContent,
    });
  }
}
