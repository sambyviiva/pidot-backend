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
      start,
      end,
      description,
      avecCount,
      invitationCount,
      location,
    } = req.body;

    const newEvent = new Event({
      name,
      startDate: start,
      endDate: end,
      description,
      avecCount,
      invitationCount,
      location,
    });

    newEvent.save();

    return res.status(201).json({ id: newEvent._id });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error: " + error);
  }
});
