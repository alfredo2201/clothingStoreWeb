import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <div className="container mb-4 mt-4">
            <div className="p-4 row d-flex d-xl-flex justify-content-center justify-content-xl-center bg-light rounded">
                <div className="col-sm-12 col-lg-10 col-xl-9 col-xxl-7 bg-white shadow-lg rounded-5px" >
                    <div className="p-5">
                        <div className="text-center">
                            <h3 className="mb-4">Create an account</h3>
                        </div>
                        <form className="user">
                            <div className="image-upload text-center">
                                <label htmlFor="file-input">
                                    <img className="img-round" src="../src/assets/img/profile.png" />
                                </label>
                                <a className="nav-icon position-relative text-decoration-none">
                                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark"><i className="fa fa-plus"></i></span>
                                </a>
                                <input id="file-input" type="file" />
                            </div>
                            <div className="mb-3"><input className="form-control form-control-user mt-4" type="text" placeholder="Username" required /></div>
                            <div className="mb-3"><input id="email" className="form-control form-control-user" type="email" placeholder="Email Address" required /></div>
                            <div className="row mb-3">
                                <div className="col-sm-6 mb-3 mb-sm-0"><input id="password" className="form-control form-control-user" type="password" placeholder="Password" required /></div>
                                <div className="col-sm-6"><input id="verifyPassword" className="form-control form-control-user" type="password" placeholder="Repeat Password" required /></div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" placeholder="Name" required /></div>
                                <div className="col-sm-6"><input className="form-control form-control-user" type="text" placeholder="Surnames" required /></div>
                            </div>
                            <div className="row mb-3">
                                <p id="emailErrorMsg" className="text-danger d-none">Paragraph</p>
                                <p id="passwordErrorMsg" className="text-danger d-none">Paragraph</p>
                            </div><button id="submitBtn" className="btn btn-dark d-block btn-user w-100" type="submit">SAVE</button>
                            <hr />
                        </form>
                        <div className="text-center"><Link className="link-view" to="/auth/login">Already have an account? Login!</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;