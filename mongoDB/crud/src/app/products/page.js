import React from "react";

const getProducts = async () => {
  let data = await fetch("http://localhost:3000/api/products");
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
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.address}</td>
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
