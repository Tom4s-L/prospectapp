interface ContactModelProps {
  _id: string
  firstname: string
  lastname: string
  email: string
  type: string
  createdAt: string
}

export class ContactModel {
  id = '';
  firstname = '';
  lastname = '';
  email = '';
  type = '';
  createdAt = '';

  static fromRow(row: ContactModelProps) {
    return Object.assign(new ContactModel(), {
      id: row._id.toString(),
      firstname: row.firstname,
      lastname: row.lastname,
      email: row.email,
      type: row.type,
      createdAt: row.createdAt,
    });
  }
}
