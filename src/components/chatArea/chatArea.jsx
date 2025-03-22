
export default function ChatArea({messages}) {
    return (
       <div className=" text-stone-100 h-460 bg-[#212121]">
              {messages.map((message, index) => (
                  <div key={index} className="mb-3">
                      <div className="w-200 h-12 bg-[#303030] text-stone-100">
                          {message.content}
                      </div>
                  </div>
              ))}
       </div>
);
}