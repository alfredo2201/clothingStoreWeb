import React, { useRef } from "react";

const ButtonShop = (props) => {
    const {value, id} = props;
    const click = useRef()

    const handleOnClick = ()=>{
      click.current.className = "btn btn-secondary btn-size"
    }
  return (
    <li className="list-inline-item">
      <span className='btn btn-success btn-size' id={id} ref={click} onClick={handleOnClick}>{value}</span>
    </li>
  );
};

export default ButtonShop;
