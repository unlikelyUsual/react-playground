import { NextFunction, Request, Response } from "express";

export class BaseController {
  constructor() {}
  protected tryCatchFn = (fn: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
      fn(req, res, next).catch(next);
    };
  };
}
