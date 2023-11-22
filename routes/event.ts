import { Router } from "express";
import { Request, Response } from "express";
import { Event } from "../models/event.model";

export const eventRoute = Router();

eventRoute.get("/event", (req: Request, res: Response) => {
  Event.find({}, { name: true, _id: true, startDate: true, endDate: true })
    .then((events) => res.json(events))
    .catch((err) => res.status(400).json("Error: " + err));
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

  console.log("POST end");
});
