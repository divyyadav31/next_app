"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@radix-ui/react-separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import ShadTooltip from "@/components/shad/ShadTooltip";
import ShadToggleGrp from "@/components/shad/ShadToggleGrp";
import ShadToggle from "@/components/shad/ShadToggle";
import ShadTabs from "@/components/shad/ShadTabs";
import ShadTable from "@/components/shad/ShadTable";
import ShadSheet from "@/components/shad/ShadSheet";
import ShadSelect from "@/components/shad/ShadSelect";
import ShadScroll from "@/components/shad/ShadScroll";
import ShadResize from "@/components/shad/ShadResize";
import ShadRadioGrp from "@/components/shad/ShadRadioGrp";
import ShadPage from "@/components/shad/ShadPage";
import ShadNav from "@/components/shad/ShadNav";
import ShadMenu from "@/components/shad/ShadMenu";
import ShadInputOTP from "@/components/shad/ShadInputOTP";
import ShadDropDown from "@/components/shad/ShadDropDown";
import ShadDialog from "@/components/shad/ShadDialog";
import ShadPopover from "@/components/shad/ShadPopover";
import ShadForm from "@/components/shad/ShadForm";
import ShadCarousel from "@/components/shad/ShadCarousel";
import ShadCard from "@/components/shad/ShadCard";
import ShadAlert from "@/components/shad/ShadAlert";
import ShadAccordion from "@/components/shad/ShadAccordion";
import ShadLabel from "@/components/shad/ShadLabel";

const Page = () => {
  const { toast } = useToast();

  return (
    <div className=" p-3 m-3 flex items-center flex-col justify-center">
      <ShadAccordion />

      <ShadAlert />

      <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
        <span className="text-4xl underline p-2 m-2">Badge</span>
        <Badge variant="destructive">This is a Badge</Badge>
      </div>

      <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
        <span className="text-4xl underline p-2 m-2">Button</span>
        <Button variant="destructive">Button</Button>
      </div>

      <ShadCard />

      <ShadCarousel />

      <ShadForm />

      <ShadPopover />

      <ShadDialog />

      <ShadDropDown />

      <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
        <span className="text-4xl underline p-2 m-2">Input</span>
        <Input type="email" placeholder="Email" className="w-1/2" />
      </div>

      <ShadInputOTP />

      <ShadLabel />

      <ShadMenu />

      <ShadNav />

      <ShadPage />

      <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
        <span className="text-4xl underline p-2 m-2">Progress</span>
        <Progress value={55} className="w-1/2" />
      </div>

      <ShadRadioGrp />

      <ShadResize />

      <ShadScroll />

      <ShadSelect />

      <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
        <span className="text-4xl underline p-2 m-2">Seperator</span>
        Hello
        <Separator />
        World
      </div>

      <ShadSheet />

      <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
        <span className="text-4xl underline p-2 m-2">Switch</span>
        <Switch />
      </div>

      <ShadTable />

      <ShadTabs />

      <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
        <span className="text-4xl underline p-2 m-2">Text Area</span>
        <Textarea className="w-1/2" />
      </div>

      <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
        <span className="text-4xl underline p-2 m-2">Toast</span>
        <Button
          onClick={() => {
            toast({
              title: "Using Toast",
              description: `${new Date()}`,
            });
          }}
        >
          Present Time
        </Button>
      </div>

      <ShadToggle />

      <ShadToggleGrp />

      <ShadTooltip />
    </div>
  );
};

export default Page;
