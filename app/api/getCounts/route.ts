import { getContractCount } from "@/actions/scrape-contract";

import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
    const response = await getContractCount();

    return Response.json({ response });
}