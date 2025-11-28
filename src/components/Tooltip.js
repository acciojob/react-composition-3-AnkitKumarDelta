import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
    >
      {children}

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
    </div>
  );
};

export default Tooltip;
