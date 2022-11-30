import React from "react";
import TitleList from "../ListProducts/TitleList/TitleList";

const OrdersProfile = () => {
    return (
        <>
          <TitleList title="Your orders"></TitleList>
            <section className="h-100 gradient-custom">
                <div className="container">
                    <div className="row d-flex justify-content-lg-start">
                        <div className="col-md-6">
                            <div className=" mb-4">
                                <div className="car-example">
                                    <div>
                                        <div className="p-4">
                                            <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">No. Order: </span>021736201</p>
                                                    <p><span className="text-muted">Address: </span>#203 Club</p>
                                                    <p><span className="text-muted">Total: </span>$499.00</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">Clothes: </span><strong><a className="link-view" href="order.html">View More</a></strong></p>
                                                    <p><span className="text-muted">State: </span>Processing</p>
                                                    <a href="index.html"><p className="text-danger"><strong>Cancel order</strong></p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrdersProfile;
