"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 👇 Step 1: Create a Zod schema with custom messages
const formSchema = z.object({
  firstName: z.string()
  .min(1, { message: "First name is required" })
  .max(5, {message: "max len is 5"})
  .min(2, {message:"min is 2"}),
  age: z
    .number({ message: "Age is required" })
    .min(3, { message: "Age must be at least 3" })
    .max(5, { message: "Age must be less than or equal to 5" }),
  gender: z.enum(["female", "male", "other"]),
});

// 👇 Step 2: Create TypeScript type from schema
type FormData = z.infer<typeof formSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[400px] mx-auto flex flex-col gap-4 mt-8"
    >
      <label>First Name</label>
      <input
        {...register("firstName")}
        className="border border-amber-500 p-4"
      />
      {errors.firstName && (
        <span className="text-red-600">{errors.firstName.message}</span>
      )}

      <label>Age</label>
      <input
        type="number"
        {...register("age", { valueAsNumber: true })} // 👈 ensure number input
        className="border border-amber-500 p-4"
      />
      {errors.age && <span className="text-red-600">{errors.age.message}</span>}

      <label>Gender Selection</label>
      <select {...register("gender")} className="border border-amber-500 p-4">
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <input type="submit" />
    </form>
  );
}
