import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import { userRoutes } from "../routes";

export const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(userRoutes);
