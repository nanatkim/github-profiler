import * as express from "express";
import NoteController from "./controllers/NoteController";

const routes = express.Router();

// notes
routes.get("/notes/:user_id", NoteController.show)
routes.post("/notes", NoteController.create)
routes.put("/notes/:id", NoteController.update)

// users

export default routes;