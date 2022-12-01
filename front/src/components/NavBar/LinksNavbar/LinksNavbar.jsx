import { Link } from "react-router-dom";
const TextNav = {
    HOME: "Home",
    ABOUTUS: "About Us",
    SHOP: "Shop",
    PRODUCTS: "Products",
    ADD_PRODUCT: "Add Products",
    ORDERS: "Orders",
  };

const LinksNavbar = (props) => {
    const { typeUser } = props;
    return (
        <div>
            {
                (typeUser == "admin") ?
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/products">
                                {TextNav.PRODUCTS}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-item">
                                {TextNav.ADD_PRODUCT}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">
                                {TextNav.ORDERS}
                            </Link>
                        </li>
                    </ul>
                    :
                    <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                {TextNav.HOME}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutUs">
                                {TextNav.ABOUTUS}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/shop">
                                {TextNav.SHOP}
                            </Link>
                        </li>
                    </ul>
            }
        </div>
    )
}

export default LinksNavbar