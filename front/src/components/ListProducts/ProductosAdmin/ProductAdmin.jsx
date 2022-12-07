import Banner from "../../Banner/Banner";
import ProductInfo from "./ProductsInfo/ProductInfo";
import useFetchItems from "../../../hooks/useItems/useFetchItems"
const ProductAdmin = () => {
    const { data } = useFetchItems()
    return (
        <>
            <Banner titleDark="Products" titleGreen="" description="  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Banner>
            <section className="h-100 gradient-custom">
                <div className="container">
                    <div className="row d-flex justify-content-lg-start">
                        <div className="mt-4">
                        </div>
                        <div>
                            <div className="">
                                <div className="car-example">
                                    <div>
                                        <div className="p-4">                                            
                                            {data.map((item) => 
                                                <ProductInfo
                                                    key={item.idItem}
                                                    idProduct={item.idItem}
                                                    img={item.img}
                                                    name={item.name}
                                                    price={item.price}
                                                    quantity={item.quantity}
                                                    size={item.size}
                                                ></ProductInfo>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="p-4">
                                            <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <img src="../src/assets/img/shop_03.jpg"
                                                        className="img-fluid image-show" alt="Cotton T-shirt" />
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                    <p><span className="text-muted">ID: </span>231123</p>
                                                    <p><span className="text-muted">Name: </span>Dress</p>
                                                    <p><span className="text-muted">Price: </span>$499</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                    <p><span className="text-muted">Quantity: </span>20</p>
                                                    <p><span className="text-muted">Size: </span>XL, S, M</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                    <button type="button" className="btn btn-dark">
                                                        EDIT
                                                    </button>
                                                    <button type="button" className="btn btn-delete">
                                                        DELETE
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ProductAdmin;