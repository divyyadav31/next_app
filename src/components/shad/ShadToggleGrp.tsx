import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

const ShadToggleGrp = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">Toggle Group</span>
      <ToggleGroup
        type="single"
        variant={"outline"}
        className="bg-black p-2 rounded-md text-white"
      >
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default ShadToggleGrp;
