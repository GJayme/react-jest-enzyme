import React from "react";

const ListItemComponent = ({ label, onClick }) => {
  return (
    <div>
      <button data-test="listItem" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default ListItemComponent;
