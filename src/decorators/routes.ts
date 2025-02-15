import { getState } from "./context";
import { ReturnExecute } from "./route.types";

export const get = (path: string) => {
  const state = getState();
  const app = state.app;
  return (...args: any) => {
    const fn = args[2].value;
    app.get(path, (req, res, _next) => {
      const execute = fn(req, _next) as ReturnExecute;
      return res.status(execute.status || 200).json(execute);
    });
  };
};

export const post = (path: string) => {
  const state = getState();
  const app = state.app;
  return (...args: any) => {
    const fn = args[2].value;
    app.post(path, (req, res, _next) => {
      const body = typeof req?.body === "string" ? JSON.parse(req?.body) : (req?.body || {});
      const execute = fn(body, req, _next) as ReturnExecute;
      return res.status(execute.status || 200).json(execute.data);
    });
  };
};
