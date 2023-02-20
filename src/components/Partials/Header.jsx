import React from "react";

const Header = ({ category, title }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <h3 className="text-3xl font-extrabold tracking-tighter text-inherit">
        {title}
      </h3>
    </div>
  );
};

export default Header;
