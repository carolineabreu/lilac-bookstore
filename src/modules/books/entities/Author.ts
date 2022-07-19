import { v4 as uuidV4 } from "uuid";

class Author {
  id?: string;

  name: string;

  contact: string;

  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Author };
