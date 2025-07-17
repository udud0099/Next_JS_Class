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
  console.log(products);

  return (
    <>
      <div>
        <h1>display products</h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>sn</th>
                <th>name</th>
                <th>price</th>
                <th>company</th>
                <th>color</th>
                <th>category</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.company}</td>
                  <td>{item.color}</td>
                  <td>{item.category}</td>
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
