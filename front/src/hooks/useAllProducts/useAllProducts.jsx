import { useState, useEffect } from "react";
import useFetchItems from "../useItems/useFetchItems";
import { PageItem } from "react-bootstrap";

export const useAllProducts = () => {

  const { numberPages, data, isFetching, ITEMS_PER_PAGE} = useFetchItems(); 
  const [auxData,setAuxData] = useState(data);
  const newData = [...data].slice(0, ITEMS_PER_PAGE) 
  const [items, setItems] = useState(newData);
  const [currentPage, setCurrentPage] = useState(0);  

  useEffect(()=>{
    setItems(
      [...data].slice(0, ITEMS_PER_PAGE)    
    );    
  },[data])

  const handleOnClick = (pageIndex) => {
    setCurrentPage(pageIndex);
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
  const categories = {
    All: "All",
    Men: "Man",
    Women: "Woman",
  };

  const handleOnChangeCategory = (e) => {
    if(e.target.innerText ==="All") return 
    const newData = data.filter(item => item.category === e.target.innerText)    
    setItems([...newData].slice(0, ITEMS_PER_PAGE));
    console.log(items);    
  };

  const filterProducts = (e) => {
    console.log(e.target.value);
    switch (e.target.value) {
      case "A to Z":
        break;
      case "Newest":
        break;
      case "Lowest price":
        break;
      case "Higest price":
        break;
      default:
        break;
    }
  };

  return { handleOnChangeCategory,items, filterProducts, categories,itemsPages,isFetching};
};

export default useAllProducts;
