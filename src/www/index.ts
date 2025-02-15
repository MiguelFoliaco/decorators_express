import { NextFunction, Request } from "express";
import { get, post } from "../decorators/routes";
import { Base } from "../lib/base";

export class WWW extends Base {
  constructor() {
    super();
  }

  @get("/")
  init() {
    return {
      data: "Hola mundo",
    };
  }

  @post("/")
  save(body: { name: string }) {
    const response = { msg: `Hola ${body.name.toLowerCase()}` };
    return {
      data: response,
      status: 200,
    };
  }

  @get("/params/:id")
  params(req: Request, next: NextFunction) {
    const id = req.params.id;

    return {
      data: `Hola mundo ${id}`,
    };
  }

  @get("/get-all-products")
  getAllProduct() {
    return {
      data: "Hola mundo",
    };
  }

  listen(port: number | string) {
    this.app.listen(port, () => {
      console.log(`Sandbox listening on port ${port}`);
    });
  }
}
