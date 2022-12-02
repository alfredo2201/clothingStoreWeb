import React, { useState } from 'react'
import { useAddItem } from '../../hooks/useAddItem'
import Banner from '../Banner/Banner'
import CategoryInput from './CategoryInput/CategoryInput'
import SizeInput from './SizeInput/SizeInput'
const FormAddItem = (props) => {
    const { title } = props
    const {nameItem,categoryItem,priceItem,
        stockITem,imageItem,handleChangeNameItem,
        handleChangePriceItem,handleChangeStockItem,
        handleChangeImageItem,handleSubmit} = useAddItem()

    const [img, setImg] = useState();

    const [previewSource,setPreviewSource] = useState();

    const handleImgInputChance = (event) =>{
        const file = event.target.files[0];
        previewFile(file);
    }

    const previewFile = (file) =>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () =>{
            setPreviewSource(reader.result)
        }
    }

    return (
        <>
            <Banner titleDark={title} titleGreen="Product" description="It is important for us that you have a good experience"></Banner>
            <div className="row mt-4">
                <div className="col-xxl-12">
                    <div className="container">
                        <div className="row">                            
                            <div className="image-upload col-md-6 col-lg-5 col-xxl-4 text-center">
                                <label htmlFor="file-input"
                                // onChange={handleImgInputChance}
                                // value={previewSource}
                                >
                                    {
                                        (previewSource) ?
                                            <img className="img-round" src={previewSource} alt='' height={'200px'} width={'150'} /> :
                                            // <img className="img-round" 
                                            // src="../src/assets/img/image-add.png"
                                            // />
                                            <input type={'file'} id="file-input"
                                            value={previewSource}
                                            onChange={handleImgInputChance}
                                            />
                                    }
                                </label>
                                <a className="nav-icon position-relative text-decoration-none">
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                                        <i className="fa fa-edit"></i></span>
                                </a>
                                <input id="file-input" type="file" />
                            </div>                            
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
                                        <CategoryInput></CategoryInput>
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
                                        {/* <div className="col-md-6">
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
                                        </div> */}
                                        <SizeInput></SizeInput>
                                        <div className="container">
                                            <div className="row mt-4">
                                                <div className="col-md-3 col-xxl-6 offset-md-6 offset-lg-5 offset-xxl-4">
                                                    <div className="form-group mb-4">
                                                        <button className="btn btn-dark w-100 py-2" type='submit'>{title}</button>
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