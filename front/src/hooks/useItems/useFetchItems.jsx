import {useState, useEffect} from 'react';
import { fetchItems } from '../../api/items';

const ITEMS_PER_PAGE = 8;
//Este debe de ir exportado al componente de items
const useFetchItems = () => {
    const [data, setData] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [numberPages,setNumberPages] = useState(0)
    useEffect(() =>{
        fetchItems().then(data =>{
            setData(data.items)                       
            setNumberPages(Math.ceil(data.items.length / ITEMS_PER_PAGE))            
        }).finally(() =>{
            setIsFetching(false)
        })
    },[])    
    return {ITEMS_PER_PAGE,numberPages,data, isFetching}
}

export default useFetchItems;