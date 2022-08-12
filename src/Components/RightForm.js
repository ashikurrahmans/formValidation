import React from "react";
import IconBox from "./IconBox";
import { TbWorld } from "react-icons/tb";
import { BsPhone } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const RightForm = () => {
  return (
    <div>
      <IconBox
        icon={TbWorld}
        title="Website"
        description="Click here to Visit"
      ></IconBox>
      <IconBox
        icon={BsPhone}
        title="Phone"
        description="+8801684986010"
      ></IconBox>
      <IconBox
        icon={MdMarkEmailUnread}
        title="Email"
        description="ashiqur.dream@gmail.com"
      ></IconBox>
      <IconBox
        icon={GrLocation}
        title="Address"
        description="Dhaka,Bangladesh"
      ></IconBox>
    </div>
  );
};

export default RightForm;
