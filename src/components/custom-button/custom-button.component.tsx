import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }: any) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
