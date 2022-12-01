
const Footer = () => {
  return (
    <footer className="bg-dark" id="tempaltemo_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h2 className="h2 text-success border-bottom pb-3 border-light logo">
              Contact Us
            </h2>
            <ul className="list-unstyled text-light footer-link-list">
              <li>
                <i className="fas fa-map-marker-alt fa-fw"></i>
                123 Consectetur at ligula 10660
              </li>
              <li>
                <i className="fa fa-phone fa-fw"></i>
                <a className="text-decoration-none" href="tel:010-020-0340">
                  010-020-0340
                </a>
              </li>
              <li>
                <i className="fa fa-envelope fa-fw"></i>
                <a className="text-decoration-none" href="mailto:dapi@gmail.com">
                  dapi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-100 bg-black py-3">
        <div className="container">
          <div className="row pt-2">
            <div className="col-12">
              <p className="text-left text-light">
                Copyright &copy; All rights reserved. By{" "}
                <a rel="sponsored">Dapi Shop</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
