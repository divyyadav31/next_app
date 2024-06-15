import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const getData = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/config");
    if (!response.ok) throw new Error("Failed to Get Config Data");
    return await response.json();
  } catch (err) {
    console.error("Error", err);
  }
};

const page = async () => {
  let Data = {};
  Data = await getData();
  return (
    <div className="flex justify-center items-center flex-col">
      {Data && (
        <p className="text-3xl m-2 p-2">
          Config Data :{" "}
          <span className="p-2 m-2 bg-green-300 rounded-md">
            {JSON.stringify(Data)}
          </span>
        </p>
      )}
      <form
        action=""
        className="rounded-md flex flex-col justify-center items-center gap-4 bg-blue-700 text-white p-6 m-2"
      >
        <Label htmlFor="key">Key</Label>
        <Input type="text" id="key" placeholder="Enter Key" />

        <Label htmlFor="value">Value</Label>
        <Input type="text" id="value" placeholder="Enter Value" />

        <Button type="submit" className="bg-white text-black hover:text-white">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default page;
