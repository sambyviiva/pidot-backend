import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDb } from "./database/mongodb";
import { eventRoute } from "./routes/event";
import { answerRoute } from "./routes/answer";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
const dbUrl = process.env.MONGO_DB_URL;

connectDb(dbUrl);

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(eventRoute);
app.use(answerRoute);

app.listen(port, () => {
  console.log(`Server is IN Fire at http://localhost:${port}`);
});
