import { Application, Request, Response } from "express";
import cors from "cors";
import { getState } from "../decorators/context";

export class Base {
  public app: Application;
  constructor() {
    this.app = getState().app!;
    this.app.use(cors());
  }
}
