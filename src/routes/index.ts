import { Router } from "express";

import { authorRoutes } from "./authors.routes";
import { categoriesRoutes } from "./categories.routes";

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/authors", authorRoutes);

export { router };
