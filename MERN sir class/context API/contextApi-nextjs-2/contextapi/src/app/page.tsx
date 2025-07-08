"use client";
import ContextApi_text1 from "@/components/ContextApi_text1"; 
import Globalprovider from "@/Context/Globalcontext";

export default function Home() { 
  return (
    <>
      <div>
        <h1>home page - </h1>
        <br /> 
        <br />
        <Globalprovider>
        <ContextApi_text1 />
        </Globalprovider>
      </div>
    </>
  );
}
