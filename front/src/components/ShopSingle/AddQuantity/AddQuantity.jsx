import React, {useRef, useState} from "react";

const AddQuantity = () => {
    const [quanity, setQuantity] = useState(1);
    const btnRemove = useRef()
    const btnAdd = useRef()
    const add = () =>{
        setQuantity(quanity +1)        
    }

    const remove = () =>{
        if(quanity == 1) return 
        setQuantity(quanity-1)
    }
  return (
    <div className="col-auto">
      <ul className="list-inline pb-3">
        <li className="list-inline-item text-right">
          Quantity
          <input
            type="hidden"
            name="product-quanity"
            id="product-quanity"
            value="1"
          />
        </li>        
        <li className="list-inline-item">
          <button className="btn btn-success" id="btn-minus" ref={btnRemove} onClick={remove}>
            -
          </button>
        </li>
        <li className="list-inline-item">
          <span className="badge bg-secondary" id="var-value">{quanity}</span>
        </li>
        <li className="list-inline-item">
          <span type="" className="btn btn-success" id="btn-plus" ref={btnAdd} onClick={add}>
            +
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AddQuantity;
