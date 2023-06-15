// import type { NextApiRequest, NextApiResponse } from "next";

import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// export default function exit(req: NextApiRequest, res: NextApiResponse) {
//   res.clearPreviewData();
//   res.writeHead(307, { Location: "/" });
//   res.end();
// }

export async function GET(req: Request) {
  draftMode().disable();
  redirect("/");
}
