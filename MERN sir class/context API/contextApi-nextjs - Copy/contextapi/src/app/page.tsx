"use client";
import ContextApi_text1 from "@/components/ContextApi_text1";
import { useAppContext } from "@/context";

export default function Home() {
  const { hello } = useAppContext();
  return (
    <>
      <div>
        <h1>home page - </h1>
        <br />
        {hello}
        <br />
        <ContextApi_text1 />
      </div>
    </>
  );
}
