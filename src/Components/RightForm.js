import React from "react";
import IconBox from "./IconBox";
import { TbWorld } from "react-icons/tb";
import { BsPhone } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
const styleIcon = {
  "margin-top": "20px",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "margin-left": "10px",
  color: "blue",
};

const RightForm = () => {
  return (
    <div>
      <IconBox
        icon={TbWorld}
        styleIcon={styleIcon}
        title="Website"
        description="Click here to Visit"
      ></IconBox>
      <IconBox
        icon={BsPhone}
        styleIcon={styleIcon}
        title="Phone"
        description="+8801684986010"
      ></IconBox>
      <IconBox
        icon={MdMarkEmailUnread}
        styleIcon={styleIcon}
        title="Email"
        description="ashiqur.dream@gmail.com"
      ></IconBox>
      <IconBox
        icon={GrLocation}
        styleIcon={styleIcon}
        title="Address"
        description="Dhaka,Bangladesh"
      ></IconBox>
    </div>
  );
};

export default RightForm;
