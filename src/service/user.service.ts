import { DocumentDefinition } from "mongoose";
import UserModel, { UserInput } from "../models/user.model";

export const createUser = async (input: DocumentDefinition<UserInput>) => {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};
