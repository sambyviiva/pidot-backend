import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDb } from "./database/mongodb";
import { eventRoute } from "./routes/event";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

connectDb();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(eventRoute);

app.listen(port, () => {
  console.log(`Server is IN Fire at http://localhost:${port}`);
});
