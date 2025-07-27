import AddForm from "@/components/AddForm";
// import React, { useState } from 'react'

const Page = () => {
  // const [image, setImage] = useState("")
  // const [name, setName] = useState("")
  // const [price, setPrice] = useState("")
  // const [link, setLink] = useState("")
  // const [description, setDescription] = useState("")
  return (
    <>
      <div>
        <h1>add new product</h1>

        <div>
          <AddForm />
        </div>
      </div>
    </>
  );
};

export default Page;
