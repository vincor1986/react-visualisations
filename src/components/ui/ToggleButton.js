import { useState, useEffect } from "react";

const ToggleButton = ({
  title1,
  title2,
  icon1,
  icon2,
  state,
  changeHandler,
}) => {
  return (
    <div className="flex p-6">
      <h3 className="inline text-white text-sm md:text-md">
        {title1 || ""}
        {icon1 && <img className="inline h-4 w-4 ml-2" src={icon1} />}
      </h3>
      <div className="flex items-center border border-white rounded-full h-6 w-11 mx-2">
        <div
          className={`h-4 w-4 bg-white rounded-full mx-1 cursor-pointer transition-all ${
            state ? "translate-x-5" : ""
          }`}
          onClick={changeHandler}
        />
      </div>
      <h3 className="inline text-white text-sm md:text-md">
        {title2 || ""}
        {icon2 && <img className="inline h-4 w-4 mr-2" src={icon2} />}
      </h3>
    </div>
  );
};

export default ToggleButton;
