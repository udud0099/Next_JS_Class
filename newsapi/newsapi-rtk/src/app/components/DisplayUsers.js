"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { useGetTopHeadlinesQuery } from "../redux/slice";

// import {  } from "../features/news/newsApiSlice";

const DisplayUsers = () => {
  const { data, isLoading, isError } = useGetTopHeadlinesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading news.</p>;
  return (
    <div>
      DispalaysUjser
      <hr></hr>
      <br />
      <div>
        {data.articles.map((a) => (
          <div key={a.url}>
            <h3>{a.title}</h3>
            <p>{a.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayUsers;
