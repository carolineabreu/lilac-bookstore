import { Router } from "express";

import { AuthorsRepository } from "../modules/books/repositories/AuthorsRepository";
import { CreateAuthorService } from "../modules/books/services/CreateAuthorService";

const authorRoutes = Router();

const authorsRepository = new AuthorsRepository();

authorRoutes.post("/", (request, response) => {
  const { name, contact } = request.body;
  const createAuthorService = new CreateAuthorService(authorsRepository);

  createAuthorService.execute({ name, contact });

  return response.status(201).send();
});

export { authorRoutes };
