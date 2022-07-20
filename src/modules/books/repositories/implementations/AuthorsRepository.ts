import { getRepository, Repository } from "typeorm";

import { Author } from "../../entities/Author";
import { IAuthorsRepository, ICreateAuthorDTO } from "../IAuthorsRepository";

class AuthorsRepository implements IAuthorsRepository {
  private repository: Repository<Author>;

  constructor() {
    this.repository = getRepository(Author);
  }

  async create({ name, contact }: ICreateAuthorDTO): Promise<void> {
    const author = this.repository.create({
      name,
      contact,
    });

    await this.repository.save(author);
  }

  async findByName(name: string): Promise<Author> {
    const author = await this.repository.findOne({
      name,
    });
    return author;
  }
}

export { AuthorsRepository };
