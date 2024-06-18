import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ShadAccordion = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">Accordion</span>
      <Accordion type="single" collapsible className="w-1/2">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Accordion is a vertically stacked component which can expand and
            collapse on click...{" "}
          </AccordionTrigger>
          <AccordionContent>Like This</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ShadAccordion;
