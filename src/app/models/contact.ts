export class Contact {

  constructor(_id = '', name = '', surname = '', email = '', phone = '', owner = ''){
    this._id = _id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.owner = owner;
  }
  _id: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
  owner: string;
}
