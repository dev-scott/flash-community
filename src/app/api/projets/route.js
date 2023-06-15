// import Projet from "@/models/Projet";

import { Projet } from "@/utils/db";


import connect from "@/utils/db"
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();

    const projet = await Projet.find();

    return new NextResponse(JSON.stringify(projet), { status: 200 });
  } catch (err) {
    return new NextResponse("Database error", { status: 500 });
  }
};
