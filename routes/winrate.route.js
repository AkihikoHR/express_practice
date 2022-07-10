import express from "express";
import { getResult } from "../controllers/winrate.controller.js";

export const winrateRouter = express.Router();

winrateRouter.post("/", (req, res) => getResult(req, res));