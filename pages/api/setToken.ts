import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { TOKEN_KEY } from "@/library/utils/localStoreKey";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize(TOKEN_KEY, req.body.token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: 24 * 60 * 60,
          sameSite: "strict",
          path: "/",
        })
      );
      res.statusCode = 201;
      res.json({ success: true });
    }
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default handler;
