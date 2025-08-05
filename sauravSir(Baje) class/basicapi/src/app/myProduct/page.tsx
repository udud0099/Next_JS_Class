export default async function page() {
  const data = await fetch("https://dummyjson.com/products");
  const posts = await data.json();
  console.log(posts);

  return (
    <>
      <h1>hi</h1>
      {/* {posts.[0].title} */}
    </>
  );
}
