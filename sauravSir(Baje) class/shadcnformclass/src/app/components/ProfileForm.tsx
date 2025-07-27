"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import bcrypt from "bcryptjs";

const formSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "Username must be not Empty." })
      .min(4, {
        message: "Username must be at least 2 characters.",
      }),
    password: z
      .string()
      .min(1, { message: "Password must be Not Empty." })
      .min(3, { message: "Password must be at least 8 characters." }),
    // .regex(/[A-Z]/, { message: "Must include at least one uppercase letter." })
    // .regex(/[a-z]/, { message: "Must include at least one lowercase letter." })
    // .regex(/[0-9]/, { message: "Must include at least one number." })
    // .regex(/[^A-Za-z0-9]/, {
    //   message: "Must include at least one special character.",
    // }),
    confirmPassword: z.string().min(1, { message: "Confirm your password." }),
    agrement: z.boolean().refine((val) => val === true, {
      message: "Accept Terms & Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export function ProfileForm() {
  // ...
  //   const form = useForm()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      agrement: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { username, password } = values;
    const hashedPassword = bcrypt.hashSync(password, 16);

    // console.log(values);
    console.log(username, password, hashedPassword);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agrement"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center space-x-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    id="agrement"
                    onCheckedChange={(checked) =>
                      field.onChange(Boolean(checked))
                    }
                  />
                </FormControl>
                <FormLabel htmlFor="agrement">
                  Accept Terms & Conditions
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
