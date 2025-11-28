import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="tooltip"
    >
        {visible && (
        <span className="tooltiptext" 
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "10px",
            padding: "4px",
            borderRadius: "4px",
            position: "absolute"
          }}
        >
          {text}
        </span>
      )}
      {children}
    </div>
    </>
  );
};

export default Tooltip;
