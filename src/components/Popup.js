import React from "react";

const Popup = ({ type, message, onClose }) => {
  const popupClassName = `popup ${type}-popup`;

  return (
    <div className={popupClassName}>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Popup;
