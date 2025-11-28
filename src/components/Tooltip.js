import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  // Clone the children and add the tooltip class to them
  const childrenWithClass = React.cloneElement(children, {
    className: `${children.props.className || ''} tooltip`.trim(),
    onMouseEnter: () => setVisible(true),
    onMouseLeave: () => setVisible(false)
  });

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {childrenWithClass}
      {visible && (
        <div
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "10px",
            padding: "4px",
            borderRadius: "4px",
            position: "absolute",
            top: "-30px",
            left: "0",
            whiteSpace: "nowrap",
            zIndex: 1000
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;