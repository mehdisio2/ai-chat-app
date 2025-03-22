'use client';

import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function AskBox({handleSend}) {
    // State to store the textarea input
    const [inputValue, setInputValue] = useState("");

    // Handle input change
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };


    return (    
        <div className="flex flex-row ">
            <Textarea 
                className="w-200 h-12 bg-[#303030] text-stone-100" 
                value={inputValue} 
                onChange={handleInputChange} 
            />
            <Button 
                className="w-20 h-15" 
                onClick={() => handleSend(inputValue)}
            >
                send
            </Button>
        </div>
    );
}