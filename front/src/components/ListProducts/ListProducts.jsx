import React, { useEffect, useState } from "react";
import TitleList from "./TitleList/TitleList";
import ProductPost from "./ProductPost/ProductPost";
// import { v4 as uuidv4 } from "uuid";
import { Pagination, PageItem } from "react-bootstrap";
import useFetchItems from "../../hooks/useItems/useFetchItems";
// const dataApi = [
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_01.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_02.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_03.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_04.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_05.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_06.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_07.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_08.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_01.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_02.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_03.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_04.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_01.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_02.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_03.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_04.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_05.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_01.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_02.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_03.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_04.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_05.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_06.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_07.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_08.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_01.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_02.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_03.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_04.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_01.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_02.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_03.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_04.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
//   {
//     id: uuidv4(),
//     srcImage: "../src/assets/img/shop_05.jpg",
//     name: "Oupidatat non",
//     price: "$250.00",
//   },
// ];

const ListProducts = (props) => {
  const { numberPages, data, isFetching, ITEMS_PER_PAGE} = useFetchItems();  
  const newData = [...data].slice(0, ITEMS_PER_PAGE)
  const { title } = props;
  const [items, setItems] = useState(newData);
  const [currentPage, setCurrentPage] = useState(0);  
  useEffect(()=>{
    setItems(
      [...data].slice(0, ITEMS_PER_PAGE)
    );
  },[data])

  const handleOnClick = (pageIndex) => {
    setCurrentPage(pageIndex);
    //Asi se puede hacer si consultamos toda la base de datos de ITEM
    setItems(
      [...data].slice(
        ITEMS_PER_PAGE * pageIndex,
        ITEMS_PER_PAGE * (pageIndex + 1)
      )
    );
    //
  };

  const itemsPages = [];
  for (let i = 0; i < numberPages; i++) {
    itemsPages.push(
      <PageItem
        key={i}
        active={i === currentPage}
        onClick={() => {
          handleOnClick(i);
        }}
      >
        {i + 1}
      </PageItem>
    );
  }

  if(isFetching) return <p>...Cargando</p>
  
  return (
    <div className="container">
      <TitleList title={title}></TitleList>
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            {items.map((item) => (
              <ProductPost
                key={item.idItem}
                srcImage="../src/assets/img/shop_01.jpg"
                name={item.name}
                price={"$"+item.price}
              ></ProductPost>
            ))}
          </div>
          {title == "Categories" ? (
            <div div="row">
              <ul className="pagination pagination-lg justify-content-end"></ul>
              <Pagination>{itemsPages}</Pagination>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
