import React from "react";
import { Link, Navigate } from "react-router-dom";
import useRegisterForm from "../../hooks/useRegisteForm/useRegisterForm";

const RegisterForm = () => {
    const { handleChangeUserName,
        handleChangeEmailUser,
        handleChangePassUser,
        handleChangePassUser2,
        handleChangeNameUser,
        handleChangeLastName,
        handleImgInputChance,
        handleSubmit,
        previewSource,
        registed,
        userName,
        emailUser,
        passwordUser,
        passwordUser2,
        nameUser,
        lastNameUser } = useRegisterForm()
    return (
        <div className="container mb-4 mt-4">
            {
                (registed && (
                    <Navigate to='/auth/login' replace={true} />
                ))
            }
            <div className="p-4 row d-flex d-xl-flex justify-content-center justify-content-xl-center bg-light rounded">
                <div className="col-sm-12 col-lg-10 col-xl-9 col-xxl-7 bg-white shadow-lg rounded-5px" >
                    <div className="p-5">
                        <div className="text-center">
                            <h3 className="mb-4">Create an account</h3>
                        </div>
                        <form className="user" onSubmit={handleSubmit}>
                            <div className="image-upload text-center">
                                <label htmlFor="file-input"
                                >
                                    {
                                        (previewSource) ?
                                            <>
                                                <img className="img-round" src={previewSource} alt='' height={'200px'} width={'150'} />
                                                <input type={'file'} id="file-input"
                                                    onChange={handleImgInputChance}
                                                    hidden
                                                />
                                            </>
                                            :
                                            <>
                                                <img className="img-round" src="../src/assets/img/image-add.png" alt='' height={'200px'} width={'150'} />
                                                <input type={'file'} id="file-input"
                                                    value={previewSource}
                                                    onChange={handleImgInputChance}
                                                    hidden
                                                />
                                            </>

                                    }
                                </label>
                            </div>
                            <div className="mb-3"><input className="form-control form-control-user mt-4" type="text" placeholder="Username" required
                                value={userName} onChange={handleChangeUserName}
                            /></div>
                            <div className="mb-3"><input id="email" className="form-control form-control-user" type="email" placeholder="Email Address" required
                                value={emailUser} onChange={handleChangeEmailUser}
                            /></div>
                            <div className="row mb-3">
                                <div className="col-sm-6 mb-3 mb-sm-0"><input id="password" className="form-control form-control-user" type="password" placeholder="Password" required
                                    value={passwordUser} onChange={handleChangePassUser}
                                /></div>
                                <div className="col-sm-6"><input id="verifyPassword" className="form-control form-control-user" type="password" placeholder="Repeat Password" required
                                    value={passwordUser2} onChange={handleChangePassUser2}
                                /></div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-sm-6 mb-3 mb-sm-0"><input className="form-control form-control-user" type="text" placeholder="Name" required
                                    value={nameUser} onChange={handleChangeNameUser}
                                /></div>
                                <div className="col-sm-6"><input className="form-control form-control-user" type="text" placeholder="Surnames" required
                                    value={lastNameUser} onChange={handleChangeLastName}
                                /></div>
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