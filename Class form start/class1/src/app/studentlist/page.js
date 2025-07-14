import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <h1>Student list</h1>
        <ul>
          <li>
            <Link href="/studentlist/hari">hari</Link>
          </li>
          <li>
            <Link href="/studentlist/binita">binita</Link>
          </li>
          <li>
            <Link href="/studentlist/shardha">shardha</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
