"use client";
import React, { useState } from "react";

const JobToggleButton: React.FC = () => {
  const [isRemoteOnly, setIsRemoteOnly] = useState(false);

  const handleToggle = () => {
    setIsRemoteOnly((prev) => !prev);
  };

  return (
    <div className="toggle-button">
      <label className="switch">
        <input type="checkbox" checked={isRemoteOnly} onChange={handleToggle} />
        <span className="slider"></span>
      </label>
      <span>{isRemoteOnly ? "Remote Only" : "Onsite"}</span>
    </div>
  );
};

export default JobToggleButton;
