"use client";
import { addAction } from "@/utils/addAction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const AddForm = () => {
  const router = useRouter();
  const [imageURL, setImageURL] = useState("");
  async function clientAddAction(formData: FormData) {
    const { error, success } = await addAction(formData);

    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
      router.push("/");
      setImageURL("");
    }
  }
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSize = file.size;
      if (Math.round(fileSize / 1024) > 1024) {
        toast.error("image greate than 1mb is not allowed.");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };
  return (
    <form action={clientAddAction}>
      <div className="flex flex-col gap-2">
        {imageURL && (
          <Image src={imageURL} alt="img" width={100} height={100} />
        )}
        <label>img</label>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          name="image"
        />
        <label>name</label>
        <input type="text" name="name" placeholder="ok" />
        <label>price</label>
        <input type="number" name="price" placeholder="ok" />
        <label>link</label>
        <input type="text" name="link" placeholder="ok" />
        <label>des</label>
        <textarea name="description" placeholder="ok" rows={3}></textarea>
        <button type="submit">save</button>
      </div>
    </form>
  );
};

export default AddForm;
