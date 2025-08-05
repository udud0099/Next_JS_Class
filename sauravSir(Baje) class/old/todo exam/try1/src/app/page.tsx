"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
// interface myData {
//   task: string[] | undefined | null;
// }

const formSchema = z.object({
  NewTask: z
    .string()
    .trim()
    .min(1, {
      message: "NewTask must be at least 2 characters.",
    })
    .min(4, {
      message: "NewTask must be at least 2 characters.",
    }),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      NewTask: "",
    },
  });
  const [task, setTask] = useState<string[]>([]);

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setTask([...task, values.NewTask]);
    console.log(values);
    form.reset();
  }
  const deleteTask = (index: number) => {
    const newTasks = [...task];
    newTasks.splice(index, 1);
    setTask(newTasks);
  };
  const editTask = (index: number) => {
    console.log(task[index]);
    // NewTask = task[index];
  };
  return (
    <>
      <div className="w-full h-screen overflow-hidden">
        <div className="w-[50%] mx-auto py-12 flex gap-8 flex-col">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="NewTask"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Add Task</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    {/* <FormDescription>
                      This is your public display name.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>

          <div className="mt-8">
            <table>
              <thead>
                <tr>
                  <th className="w-16 text-left">S.N.</th>
                  <th className=" w-100 text-left">Task</th>
                  <th className="w-16 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {task.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item}</td>
                    <td className="flex gap-4">
                      <button
                        className=" cursor-pointer"
                        onClick={() => editTask(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 cursor-pointer"
                        onClick={() => deleteTask(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
