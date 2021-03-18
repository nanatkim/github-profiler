import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Note } from "../models/Note";

const show = async (req: Request, res: Response) => {
  return res.json(await getRepository(Note).findOne({
    where: { user_id: req.params.user_id },
  }));
};

const create = async (req: Request, res: Response) => {
  const note = getRepository(Note).create(req.body);
  const result = await getRepository(Note).save(note);
  return res.json(result);
};

const update = async (req: Request, res: Response) => {
  const note = await getRepository(Note).findOne(req.params.id);
  getRepository(Note).merge(note, req.body);
  const results = await getRepository(Note).save(note);
  return res.send(results);
};

export default { show, create, update };
