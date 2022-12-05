import React, { useEffect, useState } from "react";
import TitleList from "./TitleList/TitleList";
import ProductPost from "./ProductPost/ProductPost";
// import { v4 as uuidv4 } from "uuid";
import { Pagination, PageItem } from "react-bootstrap";
import useFetchItems from "../../hooks/useItems/useFetchItems";
import { ItemContextProvider } from "../../context/item/itemContext";

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
          handleOnClick(i)          
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
            
            {/* <ItemContextProvider> */}
            {items.map((item) => (
              <ProductPost
                key={item.idItem}
                id={item.idItem}
                srcImage={item.img}
                name={item.name}
                size={item.size}
                stock={item.stock}
                price={item.price}
              ></ProductPost>
            ))}
            {/* </ItemContextProvider> */}
          </div>
          {title == "Categories" ? (
            <div className="d-flex justify-content-end m-3">              
              <Pagination className="bg-active">{itemsPages}</Pagination>
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
