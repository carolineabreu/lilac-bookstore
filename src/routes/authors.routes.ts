import { Router } from "express";

import { createAuthorController } from "../modules/books/useCases/createAuthor";

const authorRoutes = Router();

authorRoutes.post("/", (request, response) => {
  return createAuthorController.handle(request, response);
});

export { authorRoutes };
