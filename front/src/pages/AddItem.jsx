import React, { useState } from 'react'
import { registerItem } from '../api/register.api';
import { useAddItem } from '../hooks/useAddItem';
import FormAddItem from '../components/FormAddItem';
const AddItem = () => {

const {
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
} = useAddItem()

    return (
        <div>

            <FormAddItem/>
            
        </div>
    )
}

export default AddItem