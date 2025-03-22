import { Textarea } from "../textarea";
import { Button } from "../button";

export default function AskBox() {


    return (    
    <div className="fixed flex flex-row bottom-1.5 left-1/2 -translate-x-1/2 ">
        <Textarea className="w-200 h-12 bg-[#303030] text-stone-100"/>
        <Button className={"w-20 h-15"}>send</Button>
    </div>
    )


}