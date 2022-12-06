import React, { useState,useRef } from "react";

const ButtonShop = (props) => {
    const {value, id} = props;
    const [active,setActive] = useState(false)    
    const click = useRef()

    const handleOnClick = (e)=>{
      if(!active){
        setActive(!active)
        click.current.className = "btn btn-secondary btn-size"        
        return
      }      
      click.current.className = "btn btn-success btn-size"
      setActive(!active)      
    }
  return (
    <li className="list-inline-item">
      <span className='btn btn-success btn-size' key={id} ref={click} onClick={handleOnClick}>{value}</span>
    </li>
  );
};

export default ButtonShop;
