"use client";
import { QueryClient, useQuery } from "@tanstack/react-query";
import ConfigForm from "@/components/configForm";

interface ConfigData {
  [key: string]: string;
}

const Page = () => {
  const { isLoading, error, data } = useQuery<ConfigData, Error>({
    queryKey: ["configData"],
    queryFn: async () => {
      try {
        console.log("get request working");
        const response = await fetch("http://localhost:4000/api/config");
        if (!response.ok) throw new Error("Failed to Get Config Data");
        return response.json();
      } catch (error) {
        console.log("Error during data Fetching: ", error);
        return error;
      }
    },
    refetchOnWindowFocus: false,
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
      <ConfigForm />
    </div>
  );
};

export default Page;
