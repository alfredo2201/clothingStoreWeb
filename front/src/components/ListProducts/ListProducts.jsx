import React from "react";
import { Link } from "react-router-dom";
import TitleList from "../TitleList/TitleList";
import ProductPost from "./ProductPost/ProductPost";
import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    srcImage: "../src/assets/img/shop_01.jpg",
    name: "Oupidatat non",
    price: "$250.00",
  },
  {
    id: uuidv4(),
    srcImage: "../src/assets/img/shop_02.jpg",
    name: "Oupidatat non",
    price: "$250.00",
  },
  {
    id: uuidv4(),
    srcImage: "../src/assets/img/shop_03.jpg",
    name: "Oupidatat non",
    price: "$250.00",
  },
  {
    id: uuidv4(),
    srcImage: "../src/assets/img/shop_04.jpg",
    name: "Oupidatat non",
    price: "$250.00",
  },
  {
    id: uuidv4(),
    srcImage: "../src/assets/img/shop_05.jpg",
    name: "Oupidatat non",
    price: "$250.00",
  },
  {
    id: uuidv4(),
    srcImage: "../src/assets/img/shop_06.jpg",
    name: "Oupidatat non",
    price: "$250.00",
  },
  {
    id: uuidv4(),
    srcImage: "../src/assets/img/shop_07.jpg",
    name: "Oupidatat non",
    price: "$250.00",
  },
  {
    id: uuidv4(),
    srcImage: "../src/assets/img/shop_08.jpg",
    name: "Oupidatat non",
    price: "$250.00",
  },
];

const ListProducts = () => {
  return (
    <div className="container">
      <TitleList></TitleList>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            {data.map((item)=>(<ProductPost key={item.id} srcImage={item.srcImage} name={item.name} price={item.price}></ProductPost>))        
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
