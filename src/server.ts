import express from "express";

import { authorRoutes } from "./routes/authors.routes";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/authors", authorRoutes);

app.listen(3333, () => console.log("Serving is running!"));
