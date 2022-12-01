import React from "react";
import { Navigate } from "react-router-dom";
import BtnLogOut from "../btnLogOut";
import { UseFormPerfil } from "../../hooks/useFormPerfil";
import Banner from "../Banner/Banner";


const FormPerfil = () => {
  const {
    client,
    formUserName,
    formName,
    formLastName,
    formEmail,
    formAddress,
    handleChangeFormAddress,
    handleChangeFormEmail,
    handleChangeFormLastName,
    handleChangeFormName,
    handleChangeformUserName,
    submitFormPerfil,
  } = UseFormPerfil();

  return (
    <>
      <Banner titleDark="About" titleGreen="You" description="It is important for us that you have a good experience"></Banner>
      <div className="container">
        {client === null && <Navigate to="/" replace={true} />}
        <div className="row mt-4">
          <div className="col-xxl-12">
            <div className="container">
              <div className="row">
                <div className="image-upload col-md-6 col-lg-5 col-xxl-4 text-center">
                  <label htmlFor="file-input">
                    <img className="img-round" src="../src/assets/img/profile.png" />
                  </label>
                  <a className="nav-icon position-relative text-decoration-none">
                    <span className="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                      <i className="fa fa-edit"></i>
                    </span>
                  </a>
                  <input id="file-input" type="file" />
                </div>
                <div className="col-md-6">
                  <form onSubmit={submitFormPerfil} className="w-100" role="form"
                    action="#"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label className="form-label">
                          <strong>Username</strong>
                        </label>
                        <br></br>
                        <input
                          type={"text"}
                          value={formUserName}
                          onChange={handleChangeformUserName}
                          placeholder="UserName"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label className="form-label">
                          <strong>Name</strong>
                        </label>
                        <br></br>
                        <input
                          type={"text"}
                          value={formName}
                          onChange={handleChangeFormName}
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label className="form-label">
                          <strong>LastName</strong>
                        </label>
                        <br></br>
                        <input
                          type={"text"}
                          value={formLastName}
                          onChange={handleChangeFormLastName}
                          placeholder="LastName"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group mb-3">
                        <label className="form-label">
                          <strong>Email</strong>
                        </label>
                        <br></br>
                        <input
                          type={"email"}
                          value={formEmail}
                          className="form-control"
                          required
                          autoComplete="off"
                          placeholder="Email"
                          onChange={handleChangeFormEmail}
                        />
                      </div>
                    </div>

                    <div>
                      <label>Address</label>
                      <br></br>
                      <input
                        type={"text"}
                        value={formAddress}
                        onChange={handleChangeFormAddress}
                        placeholder="Address"
                        className="form-control"
                      />
                    </div>
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3 col-xxl-3 offset-md-6 offset-lg-5 offset-xxl-4">
                          <div className="form-group mt-3 mb-4">
                            <button
                              className="btn btn-success w-100 py-2"
                              type={"submit"}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                        <div className="col-md-3 col-xxl-3 offset-md-0 offset-xxl-0">
                          <div className="form-group mt-3 mb-4">
                            <BtnLogOut />
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
      </div>
    </>
  );
};

export default FormPerfil;
