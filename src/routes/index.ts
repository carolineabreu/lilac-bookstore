import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { authorsRoutes } from "./authors.routes";
import { categoriesRoutes } from "./categories.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/authors", authorsRoutes);
router.use("/users", usersRoutes);
router.use(authenticateRoutes);

export { router };
