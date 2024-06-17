"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";
import { Form } from "@/components/ui/form";

interface ConfigData {
  [key: string]: string;
}

const Page = () => {
  const { isLoading, error, data } = useQuery<ConfigData, Error>({
    queryKey: ["configData"],
    queryFn: async () => {
      const response = await fetch("http://localhost:4000/api/config");
      if (!response.ok) throw new Error("Failed to Get Config Data");
      return response.json();
    },
  });

  return (
    <div className="flex justify-center items-center flex-col">
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Oops! An error has occured!</h2>}
      {data && (
        <p className="text-3xl m-2 p-2">
          Config Data :{" "}
          <span className="p-2 m-2 bg-green-300 rounded-md">
            {JSON.stringify(data)}
          </span>
        </p>
      )}
      <Form {...form}>
        <form
          action=""
          className="rounded-md flex flex-col justify-center items-center gap-4 bg-blue-700 text-white p-6 m-2"
        >
          <Label htmlFor="data">Data</Label>
          <Textarea
            id="data"
            className="text-black"
            placeholder="Enter Your Json Data"
          />
          <Button
            type="submit"
            className="bg-white text-black hover:text-white"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
