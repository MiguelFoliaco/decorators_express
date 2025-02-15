import express, { Application } from "express";
import { getState } from "../decorators/context";

export class Base {
  public app: Application;
  constructor() {
    this.app = getState().app!;
  }
}
