import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";
import React from "react";
async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}
const userlist = async () => {
  const users = await getUsers();
  return (
    <>
      <div>
        <h1>userlist</h1>

        {users.map((item, index) => (
          <div key={index}>
            <Link href={`users/${item.id}`}>{item.name}</Link>
            <span>
              <Link href={`users/${item.id}/update`}>Edit</Link>
            </span>
            <span>
              <DeleteUser id={item.id} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default userlist;
