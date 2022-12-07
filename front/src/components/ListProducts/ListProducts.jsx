import React from "react";
import TitleList from "./TitleList/TitleList";
import ProductPost from "./ProductPost/ProductPost";
import { Pagination, PageItem } from "react-bootstrap";
import useAllProducts from "../../hooks/useAllProducts/useAllProducts";

const ListProducts = (props) => {
  const {items, itemsPages, isFetching} = useAllProducts()
  const { title } = props;
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
              <Pagination className="bg-active" onClick={window.scrollTo(0, 550)}>{itemsPages}</Pagination>
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
