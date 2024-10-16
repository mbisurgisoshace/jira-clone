import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { loginSchema } from "../schemas";

const app = new Hono().post(
  "/login",
  zValidator("json", loginSchema),
  async (c) => {
    const { email } = await c.req.valid("json");
    return c.json({ email });
  }
);

export default app;
