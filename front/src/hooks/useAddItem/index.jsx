import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { registerItem } from '../../api/register.api';

export const useAddItem = () => {
    const [nameItem, setNameItem] = useState('');
    const [sizeItem, setSizeItem] = useState([]);
    const [priceItem, setPriceItem] = useState(0);
    const [stockITem, setStockITem] = useState(0);
    const [imageItem, setImageItem] = useState('');
    const [categoryItem, setCategoryItem] = useState('');

    const handleChangeNameItem = (event) => {
        setNameItem(event.target.value);
    }

    const handleChangeCategoryItem = (event) => {
        setCategoryItem(event.target.value)
    }

    const handleChangeImageItem = (file) => {
        setImageItem(file)
    }

    const handleChangeStockItem = (event) => {
        setStockITem(event.target.value)
    }

    const handleChangePriceItem = (event) => {
        setPriceItem(event.target.value);
    }

    const handleChangeSizeItem = (event) => {
        const newsize = sizeItem;
        if (!event.target.checked) {
            if (newsize.includes(event.target.value)) {
                let index = newsize.indexOf(event.target.value)
                newsize.splice(index, 1)
                setSizeItem(newsize)
                console.log(sizeItem)
                return
            }
        } else {
            newsize.push(event.target.value)
            setSizeItem(newsize)
            console.log(sizeItem)
            return;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!nameItem || !sizeItem || !categoryItem
                || (!priceItem || priceItem <= 0)
                || (!stockITem || stockITem <= 0)) {
                Swal.fire('Please fill out the form correctly')
            }

            const result = await registerItem({
                name: nameItem,
                size: sizeItem,
                category: categoryItem,
                price: priceItem,
                stock: stockITem,
                imageItem: imageItem
            })
            if (!result) {
                Swal.fire('Error to Add Item')                                
                return;
            }

            Swal.fire('Iten saved successfully')
            setNameItem('');
            setSizeItem('');
            setCategoryItem('');
            setPriceItem(0);
            setStockITem(0);
            setImageItem('');
        } catch (error) {
            console.log(error);
        }
    }
    return {
        nameItem,
        sizeItem,
        categoryItem,
        priceItem,
        stockITem,
        imageItem,
        handleChangeNameItem,
        handleChangeSizeItem,
        handleChangeCategoryItem,
        handleChangePriceItem,
        handleChangeStockItem,
        handleChangeImageItem,
        handleSubmit
    }
}

