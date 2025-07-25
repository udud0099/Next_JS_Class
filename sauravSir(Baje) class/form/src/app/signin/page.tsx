"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

// 👇 Step 1: Create a Zod schema with custom messages
const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "  email is required " })
    .email({ message: "Invilade email" })
    .max(50, { message: "Max charator shoud be 50" })
    .min(15, { message: "Min charator shoud be 10" }),
  password: z
    .string()
    .min(1, { message: "Password required" })
    .max(6, { message: "Password must be less than or equal to 6" })
    .min(3, { message: "Password must be at least 3" })
    .regex(/[A-Z]/, { message: "Must include a capital letter" })
    .regex(/[0-9]/, { message: "Must include a number" })
    .regex(/[^A-Za-z0-9]/, { message: "Must include a special character" }),
});

// 👇 Step 2: Create TypeScript type from schema
type FormData = z.infer<typeof formSchema>;

export default function App() {
  const [pass, setPass] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[400px] mx-auto flex flex-col gap-4 mt-8"
    >
      <label>Email</label>
      <input
        {...register("email")}
        type="email"
        className="border border-amber-500 p-4"
      />
      {errors.email && (
        <span className="text-red-600">{errors.email.message}</span>
      )}

      <label>Password</label>
      <input
        type={pass ? "text" : "password"}
        {...register("password")}
        className="border border-amber-500 p-4"
      />
      <span onClick={() => setPass(!pass)}>password show hide</span>
      {errors.password && (
        <span className="text-red-600">{errors.password.message}</span>
      )}

      <input type="submit" />
    </form>
  );
}
