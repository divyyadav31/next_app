import { ScrollArea } from "../ui/scroll-area";

const ShadScroll = () => {
  return (
    <div className="w-3/4 p-3 m-3 flex items-center flex-col justify-center bg-gray-200 rounded-md">
      <span className="text-4xl underline p-2 m-2">Scrollable Area</span>
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4 bg-black text-white">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king&apos;s pillow, in his
        soup, even in the royal toilet. The king was furious, but he
        couldn&apos;t seem to stop Jokester. And then, one day, the people of
        the kingdom discovered that the jokes left by Jokester were so funny
        that they couldn&apos;t help but laugh. And once they started laughing,
        they couldn&apos;t stop.
      </ScrollArea>
    </div>
  );
};

export default ShadScroll;
