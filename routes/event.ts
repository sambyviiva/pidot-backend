import { Router } from "express";
import { Request, Response } from "express";
import { Event } from "../models/event.model";

export const eventRoute = Router();

eventRoute.get("/event", (req: Request, res: Response) => {
  Event.find({}, { name: true, _id: true, startDate: true, endDate: true })
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json("Error: " + err));
});

eventRoute.get("/event/:id", async (req: Request, res: Response) => {
  const id = req.params.id;

  const event = await Event.findById(id).exec();

  return res.status(200).json(event);
});

eventRoute.post("/event", (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const {
      name,
      startDate,
      endDate,
      description,
      avecCount,
      invitationCount,
    } = req.body;

    const newEvent = new Event({
      name,
      startDate: Date.parse(startDate),
      endDate: Date.parse(endDate),
      description,
      avecCount,
      invitationCount,
      location,
    });

    newEvent.save();

    return res.status(201).send("Event added!");
  } catch (error) {
    return res.status(500).send("Error: " + error);
  }
});
