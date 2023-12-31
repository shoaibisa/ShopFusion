import React, { useState, useEffect } from "react";

const Loader = () => {
  const loaderContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const loaderStyle = {
    border: "8px solid #f3f3f3",
    borderTop: "8px solid #3498db",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={loaderContainerStyle}>
      <div style={loaderStyle}></div>
    </div>
  );
};

export default Loader;
