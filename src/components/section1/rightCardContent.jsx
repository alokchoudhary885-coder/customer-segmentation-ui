import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between text-white">

      {/* Top circle */}
      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-semibold">
       {props.index + 1}
      </div>

      {/* Bottom Content */}
      <div>
        <p className="text-white text-[13px] leading-5 opacity-95 whitespace-pre-line mb-4 drop-shadow-lg font-light">
  {props.data.intro}
</p>

        <div className="flex justify-between items-center w-full">
          <button style={{backgroundColor:props.color}} className=" px-5 py-2 rounded-full">
            {props.data.tag}
          </button>

          <button className=" w-10 h-10 rounded-full flex items-center justify-center">
            →
          </button>
        </div>
      </div>

    </div>
  );
};

export default RightCardContent;