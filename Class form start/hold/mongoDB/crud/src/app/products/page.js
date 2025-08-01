import Link from "next/link";
import React from "react";
import DeleteData from "../components/DeleteData";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products", {
    cache: "no-cache",
  });
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};
const page = async () => {
  const products = await getProducts();
  return (
    <>
      <div>
        <h1>Products List</h1>

        <div>
          <table>
            <thead>
              <tr>
                <td>name</td>
                <td>age</td>
                <td>address</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>
                  <td>
                    <Link href={`products/${item._id}`}>edit</Link>
                  </td>
                  <td>
                    <DeleteData id={item._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default page;
