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
import { toast } from "@/components/ui/use-toast";
import { Textarea } from "./ui/textarea";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
  configData: z
    .string()
    .min(1, "Data is required")
    .refine(
      (data) => {
        try {
          JSON.parse(data);
          return true;
        } catch (e) {
          return false;
        }
      },
      {
        message: "Invalid JSON format.",
      }
    ),
});

const ConfigForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const queryClient = useQueryClient();

  const OnSubmit = async (data: z.infer<typeof FormSchema>) => {
    toast({
      title: "You submitted the following Data:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{data.configData}</code>
        </pre>
      ),
    });

    mutation.mutate(data);
  };
  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof FormSchema>) => {
      try {
        const response = await fetch("http://localhost:4000/api/config", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return await response.json();
      } catch (error) {
        console.error("Error in mutation :", error);
        return error;
      }
    },
    onSuccess: async () => {
      try {
        console.log("inside onSuccess");
        await queryClient.invalidateQueries({
          queryKey: ["configData"],
        });
        console.log("end of onSuccess");
      } catch (error) {
        console.error("Error refetching queries:", error);
      }
    },
  });
  return (
    <div className="w-full flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(OnSubmit)}
          className="w-2/3 flex justify-center items-center flex-col space-y-6"
        >
          <FormField
            control={form.control}
            name="configData"
            render={({ field }) => (
              <FormItem className="flex w-full justify-center items-center flex-col">
                <FormLabel>Config Data</FormLabel>
                <FormControl>
                  <Textarea
                    className="w-1/2"
                    placeholder="Provide a json format Config Data"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
          {mutation.isPending && <p>Pending..</p>}
          {mutation.error && <p>Error occured</p>}
        </form>
      </Form>
    </div>
  );
};

export default ConfigForm;
