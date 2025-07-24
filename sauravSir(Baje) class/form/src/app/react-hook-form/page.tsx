"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Page = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="w-[400px] mx-auto flex flex-col gap-4 mt-8">
      {/* register your input into the hook by invoking the "register" function */}
      <input
        // defaultValue="test"
        {...register("example", {required:true})}
        className="border border-amber-500 p-4"
      />
      {errors.example && <span>This field is required1</span>}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register("exampleRequired", { required: true })}
        className="border border-amber-500 p-4"
      />
      
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required2</span>}
      <br />
      <input type="submit" />
    </form>
  );
};

export default Page;
