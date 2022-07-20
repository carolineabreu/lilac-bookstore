import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

class CreateAuthorController {
  handle(request: Request, response: Response): Response {
    const { name, contact } = request.body;

    const createAuthorUseCase = container.resolve(CreateAuthorUseCase);

    createAuthorUseCase.execute({ name, contact });

    return response.status(201).send();
  }
}

export { CreateAuthorController };
