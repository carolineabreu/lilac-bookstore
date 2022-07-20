import { Router } from "express";

import { CreateCategoryController } from "../modules/books/useCases/createCategory/CreateCategoryController";
import { ListCategoriesController } from "../modules/books/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

export { categoriesRoutes };
