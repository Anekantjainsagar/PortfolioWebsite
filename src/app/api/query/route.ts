import { NextRequest, NextResponse } from "next/server";
import { connect } from "../../lib/db";
import Query from "../../lib/model/schema";

export async function POST(req: NextRequest) {
  connect();
  try {
    const { data } = await req.json();

    let name = data[0].answer;
    let email = data[1].answer;
    let mobile = data[2].answer;
    let query = data[3].answer;

    console.log({ name, email, mobile, query });

    const user = new Query({ name, email, mobile, query });
    await user.save();
    return NextResponse.json(
      { result: "Query saved success", success: true },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
