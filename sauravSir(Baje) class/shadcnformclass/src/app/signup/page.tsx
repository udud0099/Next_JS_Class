import React from "react";
import { ProfileForm } from "../components/ProfileForm";

const page = () => {
  return (
    <>
      <div className="h-screen w-full flex justify-center items-center">
        <div className="w-[400px] ">
          <h1 className="text-center">signup</h1>
          <ProfileForm />
        </div>
      </div>
    </>
  );
};

export default page;
