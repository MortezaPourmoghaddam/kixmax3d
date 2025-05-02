import React from "react";

const BackGround = () => {
  return (
    <div className="w-full h-screen left-0 top-0 absolute bg-primary-3 -z-10">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0) 65%)"
        }}
      />
    </div>
  );
};

export default BackGround;