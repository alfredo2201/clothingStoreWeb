import React, { useEffect, useState } from "react";
import TitleList from "./TitleList/TitleList";
import ProductPost from "./ProductPost/ProductPost";
import { v4 as uuidv4 } from "uuid";
import { Pagination } from "react-bootstrap";

const ITEMS_PER_PAGE = 4;
const dataApi = [
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
  },{
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
  }
];

const ListProducts = (props) => {
  let numberPages = Math.ceil(dataApi.length / ITEMS_PER_PAGE)
  const { title } = props;
  const [data, setData] = useState(dataApi);
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([...dataApi].slice(0, ITEMS_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPages = []
  for (let i = 0; i < numberPages; i++) {
    itemsPages.push(<Pagination.Item key={i} active={i === page}>{i+1}</Pagination.Item>)
  }


  return (
    <div className="container">
      <TitleList title={title}></TitleList>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            {items.map((item) => (
              <ProductPost
                key={item.id}
                srcImage={item.srcImage}
                name={item.name}
                price={item.price}
              ></ProductPost>
            ))}
          </div>
          <div div="row">
            <ul className="pagination pagination-lg justify-content-end"></ul>
            <Pagination>{itemsPages}</Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
