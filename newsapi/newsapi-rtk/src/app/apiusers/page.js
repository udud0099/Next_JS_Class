"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiNews } from "../redux/slice";
import { useEffect } from "react";
import Image from "next/image";

export default function Page() {
  const dispatch = useDispatch();
  const apiNewsData = useSelector((data) => data.newsAPIData);
  // console.log("ok" + apiNewsData);

  useEffect(() => {
    dispatch(fetchApiNews());
  }, []);

  return (
    <>
      <h1>API RTK</h1>
      {/* <button onClick={() => dispatch(fetchApiNews())}>add news</button> */}
      <br></br>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: "2rem",
          padding: "64px",
        }}
      >
        {apiNewsData.length &&
          apiNewsData.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#000000",
                padding: "24px",
              }}
            >
              <h1> {item.title} </h1>
              <p> {item.author}</p>
              <Image
                src={item.urlToImage}
                alt={item.title}
                width={100}
                height={100}
              />
              <p>{item.description}</p>
              <br></br>
              <a href={item.url} target="_blank" style={{ color: "yellow" }}>
                Full News
              </a>
            </div>
          ))}
      </div>
    </>
  );
}
