import { NextResponse } from "next/server";

export async function GET(requst, content) {
  const studentDetails = content.params.student;
  console.log(studentDetails);
  return NextResponse.json({ result: studentDetails }, { status: 200 });
  //   return new Response("all ok");
}
