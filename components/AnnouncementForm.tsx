"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import client from "@/lib/mail";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z
    .string()
    .email({
      message: "Invalid email format",
    })
    .min(1, {
      message: "Email is required",
    }),
});

export function AnnouncementForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await client.lists.addListMember("e9f3695e07", {
        email_address: data.email,
        status: "pending",
      });
      console.log(response);
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex justify-center mt-10">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    {...field}
                    className="md:w-[500px] w-[300px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-[200px] bg-[#64c6c6] hover:bg-[#212144]"
            disabled={isSubmitting || !isValid}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
