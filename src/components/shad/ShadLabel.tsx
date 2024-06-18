import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const ShadLabel = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">Label</span>
      <div className="flex flex-row justify-center items-center">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="p-2 flex justify-center items-center">
          Accept terms and conditions
        </Label>
      </div>
    </div>
  );
};

export default ShadLabel;
