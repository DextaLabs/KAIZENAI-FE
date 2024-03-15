import type { NextApiRequest, NextApiResponse } from "next";
import { TOKEN_KEY } from "@/library/utils/localStoreKey";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      let authHeader = req.cookies[TOKEN_KEY];
      res.statusCode = 200;
      res.json({ token: authHeader });
    }
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export default handler;
