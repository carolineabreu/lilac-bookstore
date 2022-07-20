import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

class CreateAuthorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, contact } = request.body;

    const createAuthorUseCase = container.resolve(CreateAuthorUseCase);

    await createAuthorUseCase.execute({ name, contact });

    return response.status(201).send();
  }
}

export { CreateAuthorController };
