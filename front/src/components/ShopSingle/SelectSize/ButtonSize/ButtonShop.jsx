import React, { useRef } from "react";

const ButtonShop = (props) => {
    const {value, id} = props;
    const click = useRef()

    const handleOnClick = (e)=>{
      click.current.className = "btn btn-secondary btn-size"
      console.log(e.target.value)
    }
  return (
    <li className="list-inline-item">
      <span className='btn btn-success btn-size' id={id} ref={click} onClick={handleOnClick} value={value}>{value}</span>
    </li>
  );
};

export default ButtonShop;
