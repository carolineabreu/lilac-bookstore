import { Author } from "../model/Author";

interface ICreateAuthorDTO {
  name: string;
  contact: string;
}

interface IAuthorsRepository {
  create({ name, contact }: ICreateAuthorDTO): void;
  findByName(name: string): Author;
}

export { ICreateAuthorDTO, IAuthorsRepository };
