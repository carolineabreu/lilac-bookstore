import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateAuthorController } from "../modules/books/useCases/createAuthor/CreateAuthorController";

const authorsRoutes = Router();

const createAuthorController = new CreateAuthorController();

authorsRoutes.use(ensureAuthenticated);
authorsRoutes.post("/", createAuthorController.handle);

export { authorsRoutes };
