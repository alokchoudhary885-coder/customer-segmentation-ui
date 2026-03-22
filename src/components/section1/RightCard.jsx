import React from "react";
import RightCardContent from "./rightCardContent";

const RightCard = (props) => {
  return (
   <div className="relative w-80 h-[500px] rounded-3xl overflow-hidden shrink-0">
      {/* Image */}
      <img
        className="w-full h-full object-cover"
        src={props.data.img}
        alt=""
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Content */}
      <RightCardContent color={props.color} data={props.data} index={props.index} />

    </div>
  );
};

export default RightCard;