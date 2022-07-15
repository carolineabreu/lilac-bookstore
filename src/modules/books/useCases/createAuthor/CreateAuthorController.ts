import { Request, Response } from "express";

import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

class CreateAuthorController {
  constructor(private createAuthorUseCase: CreateAuthorUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, contact } = request.body;

    this.createAuthorUseCase.execute({ name, contact });

    return response.status(201).send();
  }
}

export { CreateAuthorController };
