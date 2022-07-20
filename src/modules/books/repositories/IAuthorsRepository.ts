import { Author } from "../entities/Author";

interface ICreateAuthorDTO {
  name: string;
  contact: string;
}

interface IAuthorsRepository {
  create({ name, contact }: ICreateAuthorDTO): Promise<void>;
  findByName(name: string): Promise<Author>;
}

export { ICreateAuthorDTO, IAuthorsRepository };
