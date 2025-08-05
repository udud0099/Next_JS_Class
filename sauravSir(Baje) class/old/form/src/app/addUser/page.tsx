import React from "react";
import * as z from "zod";

const Player = z.object({
  username: z.string(),
  xp: z.number(),
});
const page = () => {
  return (
    <>
      <div>
        <h1>add user</h1>
      </div>
    </>
  );
};

export default page;
