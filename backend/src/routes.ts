import * as express from "express";
import NoteController from "./controllers/NoteController";
import ProfileController from "./controllers/ProfileController";

const routes = express.Router();

// notes
routes.get("/notes/:user_id", NoteController.show);
routes.post("/notes", NoteController.create);
routes.put("/notes/:id", NoteController.update);

// users
routes.get("/users/:username", ProfileController.show);

export default routes;
