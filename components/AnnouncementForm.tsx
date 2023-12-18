"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
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
      const _response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast({
        title: "Success",
        description: "You have been subscribed to our newsletter",
      });
      form.reset();
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
