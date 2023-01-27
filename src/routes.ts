import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validate from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    return res.status(200).json("Test");
  });

  app.post("/api/users", validate(createUserSchema), createUserHandler);
};

export default routes;
