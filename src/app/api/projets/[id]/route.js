import { NextResponse } from "next/server";
import connect from "@/utils/db";
import { Projet } from "@/utils/db";

export const GET = async (request, { params }) => {
  const { id } = params;

  try {
    await connect();

    const projet = Projet.findById(id);

    return NextResponse(JSON.stringify(projet), { status: 200 });
  } catch (err) {
    return NextResponse("Database error", { status: 500 });
  }
};


