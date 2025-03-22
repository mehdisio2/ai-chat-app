import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="fixed flex flex-row bottom-1.5 left-1/2 -translate-x-1/2 ">
      <Textarea className="w-200 h-12 bg-[#303030] text-stone-100"/>
      <Button className={"w-20 h-15"}>send</Button>
    </div>
  );
}
