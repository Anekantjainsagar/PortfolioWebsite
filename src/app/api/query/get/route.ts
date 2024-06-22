import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../../lib/db";
import Query from "../../../lib/model/schema";

export async function GET(req: NextRequest) {
  connect();
  try {
    const data = await Query.find();
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
