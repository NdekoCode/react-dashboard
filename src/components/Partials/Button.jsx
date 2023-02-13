/* eslint-disable react/button-has-type */
import React from "react";

const Button = ({
  type = "button",
  color,
  bgColor,
  text,
  borderRadius,
  children,
  className,
  size,
}) => (
  <button
    className={`${className} text-${size}`}
    style={{ color, borderRadius, backgroundColor: bgColor }}
    type={type}
  >
    {children}
  </button>
);
export default Button;
