import React from 'react'
import { useAddItem } from '../../hooks/useAddItem'
import Banner from '../Headers/Banner'
const FormAddItem = (props) => {
    const { title } = props

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
        <>
            <Banner titleDark={title} titleGreen="Product" description="It is important for us that you have a good experience"></Banner>
            {
                (imageItem && (
                    <img src={imageItem} alt='' height={'200px'} width={'150'} />
                ))
            }
            <div className="row mt-4">
                <div className="col-xxl-12">
                    <div className="container">
                        <div className="row">
                            {/* Aqui estaria la imagen */}
                            <div className="image-upload col-md-6 col-lg-5 col-xxl-4 text-center">
                                <label htmlFor="file-input">
                                    <img className="img-round" src="../src/assets/img/image-add.png" />
                                </label>
                                <a className="nav-icon position-relative text-decoration-none">
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                        <i className="fa fa-edit"></i></span>
                                </a>
                                <input id="file-input" type="file" />
                            </div>
                            {/* form */}
                            <div className="col-md-6">
                                <form className="w-100" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12">
                                            <div className="form-group mb-3">
                                                <label className="form-label">
                                                    <strong>Name</strong>
                                                </label>
                                            </div>
                                            <input className="form-control" type="text" required autoComplete="off" placeholder="Name"
                                                value={nameItem} onChange={handleChangeNameItem} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <div onChange={handleChangeCategoryItem}>
                                                <label className="form-label mt-2">
                                                    <strong>Category</strong>
                                                </label>
                                                <br/>
                                                <div className="form-check form-check-inline">                                                    
                                                    <input className="form-check-input" type="radio" id='Man' name='category' value={'Man'} />
                                                    <label className="form-check-label" htmlFor="formCheck-3">Man</label>
                                                </div>
                                                <div className="form-check form-check-inline">                                                    
                                                    <input className="form-check-input" type="radio" id='Woman' name='category' value={'Woman'} />
                                                    <label className="form-check-label" htmlFor="formCheck-3">Woman</label>
                                                </div>
                                                <div className="form-check form-check-inline">                                                    
                                                    <input className="form-check-input" type="radio" id='Kids' name='category' value={'Kids'} />
                                                    <label className="form-check-label" htmlFor="formCheck-3">Kids</label>
                                                </div>                                                
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label" name='price'>
                                                    <strong>Price</strong>
                                                </label>
                                                <input className="form-control" type="number" required autoComplete="off" placeholder="Price"
                                                    value={priceItem}
                                                    onChange={handleChangePriceItem}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label" name='stock'>
                                                    <strong>Stock</strong>
                                                </label>
                                                <input className="form-control" type={'number'} name='stock'
                                                    value={stockITem}
                                                    onChange={handleChangeStockItem}
                                                    required autoComplete="off" placeholder="Stock"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group mb-3">
                                                <label className="form-label" name='imageURL'>
                                                    <strong>Image URL</strong>
                                                </label>
                                                <input className="form-control" type={'text'} name='imgItem'
                                                    value={imageItem}
                                                    onChange={handleChangeImageItem}
                                                    required
                                                />
                                            </div>
                                        </div>


                                        {/* <div onChange={handleChangeSizeItem}>
                                            <label name='size'>Size</label><br></br>
                                            <span>S</span>
                                            <input type={'radio'} id='S' name='size' value={'S'} />
                                            <span>&nbsp;M</span>
                                            <input type={'radio'} id='M' name='size' value={'M'} />
                                            <span>&nbsp;L</span>
                                            <input type={'radio'} id='L' name='size' value={'L'} />
                                            <span>&nbsp;XL</span>
                                            <input type={'radio'} id='XL' name='size' value={'XL'} />
                                        </div> */}

                                        <div className="container" onChange={handleChangeCategoryItem}>
                                            <div className="row col-md-12">
                                                <label className="form-label">
                                                    <strong>Size</strong>
                                                </label>
                                                <div className="col-md-3">
                                                    <div className="form-check ">
                                                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="formCheck-3">XS</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="formCheck-3">S</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-check">
                                                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="formCheck-3">M</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="formCheck-3">L</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-check">
                                                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="formCheck-3">XL</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="formCheck-3">2XL</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="form-check">
                                                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="formCheck-3">3XL</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input id="formCheck-3" className="form-check-input" type="checkbox" />
                                                        <label className="form-check-label" htmlFor="formCheck-3">4xL</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="container">
                                            <div class="row mt-4">
                                                <div class="col-md-3 col-xxl-6 offset-md-6 offset-lg-5 offset-xxl-4">
                                                    <div class="form-group mb-4">
                                                        <button class="btn btn-dark w-100 py-2" type='submit'>{title}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormAddItem