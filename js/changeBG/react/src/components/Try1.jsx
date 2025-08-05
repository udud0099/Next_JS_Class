import React from 'react'

const Try1 = () => {
    const changeBg = (bgCol) => {
    document.body.style.backgroundColor = bgCol;
  };
  return (
    <div>
        <div className="flex gap-4 p-4">
        <button
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => changeBg("red")}
        >
          red
        </button>
        <button
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => changeBg("blue")}
        >
          blue
        </button>
        <button
          className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer"
          onClick={() => changeBg("green")}
        >
          green
        </button>
      </div>
    </div>
  )
}

export default Try1