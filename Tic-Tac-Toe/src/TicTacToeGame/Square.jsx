import React from "react";

const Square = (props) => {
  const style = props.value === 'X' ? "orangered" : "dodgerblue";
  return (
    <div onClick={props.onClick} className="square"
    style={{color:style}}
     >
      <h5>{props.value}</h5>
    </div>
  );
};

export default Square;
