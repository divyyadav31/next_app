import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

const ShadToast = () => {
  const toast = useToast();
  return (
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
  );
};

export default ShadToast;
