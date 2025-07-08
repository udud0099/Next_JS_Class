"use client";
import { createContext } from "react";

export const Globalcontext = createContext();

const Globalprovider = (props) => {
  const count = 0;
  const Name = "MERN sir";
  return (
    <Globalcontext.Provider value={{ count, Name }}>
      {props.children}
    </Globalcontext.Provider>
  );
};

export default Globalprovider;
