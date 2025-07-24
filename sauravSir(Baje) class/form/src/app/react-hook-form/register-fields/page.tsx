"use client";
import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  gender: GenderEnum;
  age: number;
}

export default function App() {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[400px] mx-auto flex flex-col gap-4 mt-8"
    >
      <label>First Name</label>
      <input
        {...register("firstName", { required: true, maxLength: 2 })}
        className="border border-amber-500 p-4"
      />
      {errors.firstName && <span>This field is required</span>}
      <input
        type="number" className="border border-amber-500 p-4"
        {...register("age", { required: true, min: 3, max: 5 })}
      />
      {errors.age && <span>This field is required</span>}

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
