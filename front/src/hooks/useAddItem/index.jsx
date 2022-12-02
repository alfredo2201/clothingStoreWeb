import React, { useState } from 'react'

import { registerItem } from '../../api/register.api';

export const useAddItem = () => {
    const [nameItem, setNameItem] = useState('');
    const [sizeItem, setSizeItem] = useState('');
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

    const handleChangeImageItem = (event) => {
        setImageItem(event.target.value)
    }

    const handleChangeStockItem = (event) => {
        setStockITem(event.target.value)
    }

    const handleChangePriceItem = (event) => {
        setPriceItem(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('c', categoryItem)
            if (!nameItem || !sizeItem || !categoryItem
                || (!priceItem || priceItem <= 0)
                || (!stockITem || stockITem <= 0)) {
                alert('please fill out the form correctly')
            }
            const result = await registerItem({
                name: nameItem,
                size: sizeItem,
                category: categoryItem,
                price: priceItem,
                stock: stockITem,
                img: imageItem
            })
            if (!result) {
                alert('Error to Add Item')
                return;
            }

            alert('saved item correctly');
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

    const handleChangeSizeItem = (event) => {
        setSizeItem(event.target.value)
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

