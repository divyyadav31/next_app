import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const ShadTooltip = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">ToolTip</span>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="rounded-md bg-black text-white p-2">
            Hover
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ShadTooltip;
