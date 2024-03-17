import { Router } from "express";
import { Request, Response } from "express";
import { Event } from "../models/event.model";

export const answerRoute = Router();

answerRoute.post("/answer", async (req: Request, res: Response) => {
  const { eventId, name, answer, avecCount } = req.body;

  const event = await Event.findById(eventId).exec();
  console.log("Event fetched: ", JSON.stringify(event));

  if (!event) {
    return res.status(404).json("Event not found");
  }

  const lowerCaseAnswer = (answer as string).toLowerCase();

  if (lowerCaseAnswer === "yes") {
    event.participants.push(name);
  } else if (lowerCaseAnswer === "no") {
    event.declined.push(name);
  } else if (lowerCaseAnswer === "maybe") {
    event.maybe.push(name);
  } else {
    return res.status(400).json("Missing answer value");
  }
  event.save();

  return res.status(200).json("Answer added!");
});
