import { getContractDetails } from "@/actions/scrape-contract";

import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const tokenAddress = req.nextUrl?.searchParams.get("url");
  const response = await getContractDetails(tokenAddress + "#code");

  return Response.json(response);
}
