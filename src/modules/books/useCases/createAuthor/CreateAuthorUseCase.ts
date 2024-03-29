import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IAuthorsRepository } from "../../repositories/IAuthorsRepository";

interface IRequest {
  name: string;
  contact: string;
}

@injectable()
class CreateAuthorUseCase {
  constructor(
    @inject("AuthorsRepository") private authorsRepository: IAuthorsRepository
  ) {}

  async execute({ name, contact }: IRequest): Promise<void> {
    const authorAlreadyExists = await this.authorsRepository.findByName(name);

    if (authorAlreadyExists) {
      throw new AppError("Author Already Exists!");
    }

    await this.authorsRepository.create({
      name,
      contact,
    });
  }
}

export { CreateAuthorUseCase };
