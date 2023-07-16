import React, { useState } from "react";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: -10, y: -10 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      style={{
        width: `100vw`,
        height: "100vh",
        position: "absolute",
        zIndex: 1,
      }}
      onMouseMove={handleMouseMove}
    >
      <div style={{ pointerEvents: "none" }}>
        <span
          style={{
            position: "absolute",
            top: mousePosition.y - 20,
            left: mousePosition.x - 20,
            opacity: 0.8,
            border: `3px solid #F2672E`,
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "transparent",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            top: mousePosition.y - 4,
            left: mousePosition.x - 4,
            opacity: 0.4,
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
          }}
        ></span>
      </div>
    </div>
  );
};

export default MouseTracker;
