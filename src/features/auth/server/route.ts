import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { loginSchema, signupSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), async (c) => {
    const { email } = await c.req.valid("json");
    return c.json({ sucess: true });
  })
  .post("/register", zValidator("json", signupSchema), async (c) => {
    const { name, email } = await c.req.valid("json");
    return c.json({ success: true });
  });

export default app;
