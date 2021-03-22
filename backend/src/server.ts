import express from "express";
import { createConnection } from "typeorm";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());

createConnection().then((connection) => {
  app.use(express.json());
  app.use(routes);
});

app.listen(3333);
