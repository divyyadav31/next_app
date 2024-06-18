import { Toggle } from "../ui/toggle";

const ShadToggle = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">Toggle</span>
      <div className="bg-black text-white rounded-md p-2 flex gap-2">
        <Toggle>1</Toggle>
        <Toggle>2</Toggle>
        <Toggle>3</Toggle>
      </div>
    </div>
  );
};

export default ShadToggle;
