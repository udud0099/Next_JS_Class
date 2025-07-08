import React, { useContext } from "react";
import ContextApi_text2 from "./ContextApi_text2";
import { Globalcontext } from "@/Context/Globalcontext";

const ContextApi_text1 = () => {
  const Contextdata = useContext(Globalcontext);
  console.log(Contextdata);

  return (
    <div>
      ContextApi_text1
      <br />
      <br />
      <ContextApi_text2 />
    </div>
  );
};

export default ContextApi_text1;
