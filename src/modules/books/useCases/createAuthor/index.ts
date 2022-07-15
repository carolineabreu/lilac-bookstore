import { AuthorsRepository } from "../../repositories/implementations/AuthorsRepository";
import { CreateAuthorController } from "./CreateAuthorController";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

const authorsRepository = new AuthorsRepository();

const createAuthorUseCase = new CreateAuthorUseCase(authorsRepository);

const createAuthorController = new CreateAuthorController(createAuthorUseCase);

export { createAuthorController };
