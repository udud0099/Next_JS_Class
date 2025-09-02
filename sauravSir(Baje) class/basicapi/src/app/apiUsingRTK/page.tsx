import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const data = await fetch("https://dummyjson.com/products");
  const product = await data.json();
  const list = product.products;

  console.log(list);

  return (
    <>
      <div className="p-8">
        <h1>hi222</h1>
        {/* {posts.[0].title} */}
        <div className="grid grid-cols-4">
          {list.map((item: any, index: number) => (
            <Link key={index} href={`apiUsingRTK/${item.id}`}>
              <div>
                <h1>
                  {item.id}. {item.title}
                </h1>
                {item.images?.[0] ? (
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    width={100}
                    height={100}
                  />
                ) : (
                  <p>No Image</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
