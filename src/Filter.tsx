import React from "react";
function Filter() {
  return (
    <div>
      <button style={ButtonStyle}>All</button>
      <button style={ButtonStyle}>Electric</button>
      <button style={ButtonStyle}>New</button>
    </div>
  );
}

export default Filter;

const ButtonStyle: React.CSSProperties = {
  padding: "8px",
  margin: "5px",
};
