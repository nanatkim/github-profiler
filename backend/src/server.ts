import express from "express";
import { createConnection } from "typeorm";
import routes from "./routes";

const app = express();

createConnection().then((connection) => {
  app.use(express.json());
  app.use(routes);
});

app.listen(3333);
