import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

export const app = express();
app.use(bodyParser.json());
app.use(cors());
