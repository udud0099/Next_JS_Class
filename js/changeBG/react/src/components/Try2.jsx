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
          red
        </button>
        <button
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => setBgCol("blue")}
        >
          blue
        </button>
        <button
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => setBgCol("green")}
        >
          green
        </button>
      </div>
    </div>
  );
};

export default Try2;
