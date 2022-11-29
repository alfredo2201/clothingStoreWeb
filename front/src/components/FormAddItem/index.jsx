import React from 'react'
import { useAddItem } from '../../hooks/useAddItem'

const FormAddItem = () => {

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
            {
                (imageItem && (
                    <img src={imageItem} alt='' height={'200px'} width={'150'} />
                ))
            }
            <form onSubmit={handleSubmit}>
                <div>
                    <label name='name'>Name</label>
                    <input type={'text'} name='name'
                        value={nameItem} onChange={handleChangeNameItem}
                        required
                    />
                </div>

                <div onChange={handleChangeSizeItem}>
                    <label name='size'>Size</label><br></br>
                    <span>S</span>
                    <input type={'radio'} id='S' name='size' value={'S'} />
                    <span>&nbsp;M</span>
                    <input type={'radio'} id='M' name='size' value={'M'} />
                    <span>&nbsp;L</span>
                    <input type={'radio'} id='L' name='size' value={'L'} />
                    <span>&nbsp;XL</span>
                    <input type={'radio'} id='XL' name='size' value={'XL'} />
                </div>

                <div onChange={handleChangeCategoryItem}>
                    <label name='size'>Category</label><br></br>
                    <span>Man</span>
                    <input type={'radio'} id='Man' name='category' value={'Man'} />
                    <span>&nbsp;Woman</span>
                    <input type={'radio'} id='Woman' name='category' value={'Woman'} />
                    <span>&nbsp;Kid</span>
                    <input type={'radio'} id='Kids' name='category' value={'Kids'} />
                </div>

                <div>
                    <label name='price'>Price</label>
                    <input type={'number'} name='price'
                        value={priceItem}
                        onChange={handleChangePriceItem}
                        required
                    />
                </div>

                <div>
                    <label name='stock'>Stock</label>
                    <input type={'number'} name='stock'
                        value={stockITem}
                        onChange={handleChangeStockItem}
                        required
                    />
                </div>

                <div>
                    <label>Image URL</label>
                    <input type={'text'} name='imgItem'
                        value={imageItem}
                        onChange={handleChangeImageItem}
                        required
                    />
                </div>

                <div>
                    <button type={'submit'} >Add</button>
                </div>
            </form>
        </div>
    )
}

export default FormAddItem