import React from "react";
async function getUser(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
}
const page = async ({ params }) => {
  const user = await getUser(params.userid);
  return (
    <>
      <div>
        <h1>name is {user.name}</h1>
        <h3>age is {user.age}</h3>
      </div>
    </>
  );
};

export default page;
