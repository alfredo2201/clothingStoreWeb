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
                                                    stock={item.stock}
                                                    size={item.size}
                                                ></ProductInfo>
                                                
                                            )}
                                        </div>
                                    </div>

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