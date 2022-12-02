import Banner from "../../Banner/Banner";
const OrderAdmin = (props) => {
    const { title } = props;
    return (
        <>
            <Banner titleDark={title} titleGreen="" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></Banner>
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
                                            <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">No. Order: </span>021736201</p>
                                                    <p><span className="text-muted">Order by: </span>Sussan12</p>
                                                    <p><span className="text-muted">Name: </span>Sussan Smith</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">Email: </span>Sussan</p>
                                                    <p><span className="text-muted">Address: </span>#203 Club</p>
                                                    <p><span className="text-muted">Total: </span>$499.00</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p>
                                                        <span className="text-muted">Clothes: </span>
                                                        <strong>
                                                            <a className="link-view" href="order.html">View More</a>
                                                        </strong>
                                                    </p>
                                                    <p><span className="text-muted">State: </span>Processing</p>
                                                    <a href="index.html"><p className="text-danger"><strong>Cancel order</strong></p></a>
                                                </div>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="p-4">
                                            <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">No. Order: </span>021736201</p>
                                                    <p><span className="text-muted">Order by: </span>Sussan12</p>
                                                    <p><span className="text-muted">Name: </span>Sussan Smith</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">Email: </span>Sussan</p>
                                                    <p><span className="text-muted">Address: </span>#203 Club</p>
                                                    <p><span className="text-muted">Total: </span>$499.00</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p>
                                                        <span className="text-muted">Clothes: </span>
                                                        <strong>
                                                            <a className="link-view" href="order.html">View More</a>
                                                        </strong>
                                                    </p>
                                                    <p><span className="text-muted">State: </span>Processing</p>
                                                    <a href="index.html"><p className="text-danger"><strong>Cancel order</strong></p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <hr />
                                    <div>
                                        <div className="p-4">
                                            <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">No. Order: </span>021736201</p>
                                                    <p><span className="text-muted">Order by: </span>Sussan12</p>
                                                    <p><span className="text-muted">Name: </span>Sussan Smith</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">Email: </span>Sussan</p>
                                                    <p><span className="text-muted">Address: </span>#203 Club</p>
                                                    <p><span className="text-muted">Total: </span>$499.00</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">Clothes: </span><strong><a className="link-view" href="order.html">View More</strong></p></a>
                                                    <p><span className="text-muted">State: </span>Processing</p>
                                                    <a href="index.html"><p className="text-danger"><strong>Cancel order</strong></p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="" />
                                    <div>
                                        <div className="p-4">
                                            <div className="row d-flex justify-content-between align-items-center">
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">No. Order: </span>021736201</p>
                                                    <p><span className="text-muted">Order by: </span>Sussan12</p>
                                                    <p><span className="text-muted">Name: </span>Sussan Smith</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">Email: </span>Sussan</p>
                                                    <p><span className="text-muted">Address: </span>#203 Club</p>
                                                    <p><span className="text-muted">Total: </span>$499.00</p>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-4">
                                                    <p><span className="text-muted">Clothes: </span><strong><a className="link-view" href="order.html">View More</strong></p></a>
                                                    <p><span className="text-muted">State: </span>Processing</p>
                                                    <a href="index.html"><p className="text-danger"><strong>Cancel order</strong></p></a>
                                                </div>
                                            </div>
                                        </div> */}
                                    {/* </div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default OrderAdmin