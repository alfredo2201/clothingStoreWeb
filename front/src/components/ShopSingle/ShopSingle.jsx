import React from "react";
import AddQuantity from "./AddQuantity/AddQuantity";
import SelectSize from "./SelectSize/SelectSize";
// import PhotoCarousel from "./PhotoCarousel/PhotoCarousel";
import { useItem } from "../../context/item/itemContext";
import useCartItems from "../../hooks/useCartItems/useCartItems";
const SingleShop = () => {
  const { item } = useItem();

  const { submitAddProduct, handleChangeSizeItem, handleChangeQuantityItem } =
    useCartItems();
    window.scrollTo(0, 0);
  return (
    <section className="bg-light">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img
                className="card-img img-fluid"
                src={item.srcImage}
                alt="Card image cap"
                id="product-detail"
              />
            </div>
            <div className="row">
              <div
                id="multi-item-example"
                className="col-10 carousel slide carousel-multi-item"
                data-bs-ride="carousel"
              >
                {/* <div className="carousel-inner product-links-wap" role="listbox">
                                    <PhotoCarousel></PhotoCarousel>
                                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h1 className="h2">{item.name}</h1>
                <p className="h3 py-2">${item.price}.00</p>
                {/* */}
                <form action="" method="GET" onSubmit={submitAddProduct}>
                  <input
                    type="hidden"
                    name="product-title"
                    value="Activewear"
                  />
                  <div className="row">
                    <SelectSize
                      onChangeSize={handleChangeSizeItem}
                    ></SelectSize>
                    <AddQuantity
                      onChangeQuantity={handleChangeQuantityItem}
                    ></AddQuantity>
                  </div>

                  <div className="row pb-3">
                    <div className="col d-grid">
                      <button
                        type="submit"
                        className="btn btn-success btn-lg"
                        name="submit"
                        value="addtocard"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleShop;
