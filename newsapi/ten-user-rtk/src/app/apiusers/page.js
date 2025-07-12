"use client";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiNews } from "../redux/slice";

export default function Page() {
  const dispatch = useDispatch();
  const apiNewsData = useSelector((data) => data.newsAPIData);
  console.log(apiNewsData.newsAPIData);

  return (
    <>
      <h1>API RTK</h1>
      <button onClick={() => dispatch(fetchApiNews())}>add news</button>
      <br></br>
      {apiNewsData.length &&
        apiNewsData.map((item) => <h1 key={item.id}>{item.name}</h1>)}
    </>
  );
}
