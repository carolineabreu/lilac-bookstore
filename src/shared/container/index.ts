import { container } from "tsyringe";

import { IAuthorsRepository } from "../../modules/books/repositories/IAuthorsRepository";
import { ICategoriesRepository } from "../../modules/books/repositories/ICategoriesRepository";
import { AuthorsRepository } from "../../modules/books/repositories/implementations/AuthorsRepository";
import { CategoriesRepository } from "../../modules/books/repositories/implementations/CategoriesRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IAuthorsRepository>(
  "AuthorsRepository",
  AuthorsRepository
);
