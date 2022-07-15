import { IAuthorsRepository } from "../../repositories/IAuthorsRepository";

interface IRequest {
  name: string;
  contact: string;
}

class CreateAuthorUseCase {
  constructor(private authorsRepository: IAuthorsRepository) {}
  execute({ name, contact }: IRequest): void {
    const authorAlreadyExists = this.authorsRepository.findByName(name);

    if (authorAlreadyExists) {
      throw new Error("Author Already Exists!");
    }

    this.authorsRepository.create({
      name,
      contact,
    });
  }
}

export { CreateAuthorUseCase };
