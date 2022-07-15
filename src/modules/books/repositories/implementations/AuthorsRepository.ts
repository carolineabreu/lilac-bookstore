import { Author } from "../../model/Author";
import { IAuthorsRepository, ICreateAuthorDTO } from "../IAuthorsRepository";

class AuthorsRepository implements IAuthorsRepository {
  private authors: Author[];

  constructor() {
    this.authors = [];
  }

  create({ name, contact }: ICreateAuthorDTO): void {
    const author = new Author();

    Object.assign(author, {
      name,
      contact,
      created_at: new Date(),
    });

    this.authors.push(author);
  }

  findByName(name: string): Author {
    const author = this.authors.find((author) => author.name === name);
    return author;
  }
}

export { AuthorsRepository };
