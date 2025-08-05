import { useEffect, useState } from "react";

const Try2 = () => {
  const [bgCol, setBgCol] = useState("green");

  useEffect(() => {
    document.body.style.backgroundColor = bgCol;
  }, [bgCol]);
  return (
    <div>
      <div className="flex gap-4 p-4">
        <button
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => setBgCol("red")}
        >
          Red
        </button>
        <button
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => setBgCol("blue")}
        >
          Blue
        </button>
        <button
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => setBgCol("green")}
        >
          Green
        </button>
      </div>
    </div>
  );
};

export default Try2;
