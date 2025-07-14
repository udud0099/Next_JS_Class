async function productlist() {
  let data = await fetch("https://dummyjson.com/products");

  data = await data.json();
  return data.products;
}

export default async function Page() {
  let products = await productlist();
  //   console.log(products);

  return (
    <div>
      productlist
      <br></br>
      {products.map((item, index) => (
        <div key={index}>Name is : {item.title}</div>
      ))}
    </div>
  );
}
