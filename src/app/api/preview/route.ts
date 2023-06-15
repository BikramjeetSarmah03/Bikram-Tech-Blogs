// import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { draftMode } from "next/headers";

// export default function preview(req: NextApiRequest, res: NextApiResponse) {
//   res.setPreviewData({});
//   res.writeHead(307, { Location: "/" });
//   res.end();
// }

export async function GET(req: Request) {
  draftMode().enable();
  redirect("/");
}
