import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", req.body.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(0),
          sameSite: "strict",
          path: "/",
        })
      );
      res.statusCode = 200;
      res.json({ token: req.cookies.token });
    }
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
