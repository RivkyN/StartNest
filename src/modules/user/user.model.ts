// src/modules/user/user.model.ts

export class User {
    id: string;
    name: string;
    email: string;
    phone: string;
  
    constructor(id: string, name: string, email: string, phone: string) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phone = phone;
    }
  }
  