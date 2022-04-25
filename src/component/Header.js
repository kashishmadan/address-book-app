import React from "react";

export const Header = () => {
  const headerStyle = {
    width: "100%",
    padding: "1%",
    backgroundColor: "#FF9899",
    color: "WHITE",
    textAlign: "center",
  };

  return (
    <div style={headerStyle}>
      <h1>ADDRESS BOOK</h1>
    </div>
  );
};
