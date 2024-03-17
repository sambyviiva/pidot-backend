import { Router } from "express";
import { Request, Response } from "express";
import { Event } from "../models/event.model";

export const eventRoute = Router();

eventRoute.get("/event/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const event = await Event.findById(id).exec();

  return res.status(200).json(event);
});

eventRoute.post("/event", (req: Request, res: Response) => {
  const name = req.body.name;
  const startDate = Date.parse(req.body.startDate);
  const endDate = Date.parse(req.body.endDate);

  const newEvent = new Event({
    name,
    startDate,
    endDate,
  });

  newEvent
    .save()
    .then(() => res.json("Event added!"))
    .catch((err) => res.status(400).json("Error: " + err));

  return res.status(201).send("Event added!");
});
