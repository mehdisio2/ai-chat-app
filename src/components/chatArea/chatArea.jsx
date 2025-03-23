
export default function ChatArea({messages}) {
    return (
       <div className=" text-stone-100 h-460 bg-[#212121] overflow-x-auto">
              {messages.map((message, index) => (
                  <div key={index} className="mb-3 w-200  bg-[#303030] text-stone-100">
                         <p>
                            {message.content}
                         </p>
                  </div>
              ))}
       </div>
);
}