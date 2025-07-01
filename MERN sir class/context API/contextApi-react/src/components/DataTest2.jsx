import React, { useContext } from "react";
import { UsersNameData } from "../ContextData";

const DataTest2 = () => {
  const userNames = useContext(UsersNameData);
  return (
    <div>
      DataTest2
      <br />
      {userNames}
    </div>
  );
};

export default DataTest2;
