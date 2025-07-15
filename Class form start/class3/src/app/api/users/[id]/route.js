import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const userData = user.filter((item) => item.id == content.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "no data found", success: false }
      : { result: userData[0], success: true },
    {
      status: 200,
    }
  );
}
