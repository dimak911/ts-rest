import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    email: string({
      required_error: "Email if required",
    }).email("Not a  valid email"),
    password: string({
      required_error: "Password if required",
    }).min(6, "Password must be 6 chars minimum"),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
