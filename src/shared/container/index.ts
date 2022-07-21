import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
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

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
