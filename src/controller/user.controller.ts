import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) => {
  try {
    const { _id, email, createdAt, updatedAt } = await createUser(req.body);

    return res.send({ _id, email, createdAt, updatedAt });
  } catch (error: any) {
    console.error(error);
    return res.status(409).json(error.message);
  }
};
