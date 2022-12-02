import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { registerClient } from "../../api/client.api";
import Swal from 'sweetalert2'

const RegisterForm = () => {

    const [previewSource, setPreviewSource] = useState();
    const [userName, setUserName] = useState();
    const [emailUser, setEmailUser] = useState();
    const [passwordUser, setPasswordUser] = useState();
    const [passwordUser2, setPasswordUser2] = useState();
    const [nameUser, setNameUser] = useState();
    const [lastNameUser, setLastNameUSer] = useState();
    const [file, setFile] = useState();
    const [registed, setRegisted] = useState(false);
    const handleChangeUserName = (event) => {
        setUserName(event.target.value)
    }

    const handleChangeEmailUser = (event) => {
        setEmailUser(event.target.value);
    }

    const handleChangePassUser = (event) => {
        setPasswordUser(event.target.value);
    }

    const handleChangePassUser2 = (event) => {
        setPasswordUser2(event.target.value);
    }
    const handleChangeNameUser = (event) => {
        setNameUser(event.target.value);
    }

    const handleChangeLastName = (event) => {
        setLastNameUSer(event.target.value);
    }

    const handleImgInputChance = (event) => {
        const file = event.target.files[0];
        setFile(file)
        previewFile(file);
    }

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = {
        //     userName: userName,
        //     name: nameUser,
        //     lastName: lastNameUser,
        //     address: '',
        //     email: emailUser,
        //     password: passwordUser,
        //     imgPerfil: previewSource
        // }
        if (passwordUser !== passwordUser2) {
            // Swal.fire('Passwords do not match')                                
            alert('Passwords do not match')
            return;
        }
        const formData = new FormData();
        formData.append('userName', userName);
        formData.append('name', nameUser);
        formData.append('lastName', lastNameUser);
        formData.append('address', 'mi casa');
        formData.append('email', emailUser);
        formData.append('password', passwordUser);
        formData.append('imgPerfil', file);

        const result = registerClient(formData)
        if (!result) {
            // Swal.fire('Error registering account')                                
            alert('chale no se registró')
        }
        // Swal.fire('Account register successful')                                
        alert('Cuenta registrada');
        setRegisted(true)

    }

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