import React from "react";

const IconBox = (props) => {
  const { icon, title, description } = props;

  return (
    <div>
      <div className="max-w-sm rounded-lg overflow-hidden shadow-lg my-4 ">
        <div className="flex">
          {React.createElement(icon)}
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2">{title}</h1>
            <a href="#s" className="text-blue-700 text-base">
              {description}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconBox;
