interface PageProps {
  params: {
    id: string;
  };
}

export default async function page({ params }: PageProps) {
  const { id } = params;

  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await data.json();
  // const list = product.products;

  console.log("Product of data:",product );

  return (
    <>
      <div className="p-8">
        <h1>detal {id}</h1>
        {product.title}
      </div>
    </>
  );
}
