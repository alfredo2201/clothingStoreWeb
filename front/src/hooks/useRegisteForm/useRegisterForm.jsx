import { useState } from "react";
import { registerClient } from "../../api/client.api";
import Swal from "sweetalert2";

const useRegisterForm = () => {
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
    setUserName(event.target.value);
  };

  const handleChangeEmailUser = (event) => {
    setEmailUser(event.target.value);
  };

  const handleChangePassUser = (event) => {
    setPasswordUser(event.target.value);
  };

  const handleChangePassUser2 = (event) => {
    setPasswordUser2(event.target.value);
  };
  const handleChangeNameUser = (event) => {
    setNameUser(event.target.value);
  };

  const handleChangeLastName = (event) => {
    setLastNameUSer(event.target.value);
  };

  const handleImgInputChance = (event) => {
    const file = event.target.files[0];
    setFile(file);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmit = (event) => {
    const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    event.preventDefault();
    if (passwordUser !== passwordUser2) {
      Swal.fire({
        icon: 'error',
        text: 'Passwords are differents',
        timer: 2500,
      });
      return;
    }
    if (!regex.test(passwordUser)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must have min Length 8, 1 lowercase, 1 uppercase and 1 number!",
      });
      return;
    }

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("name", nameUser);
    formData.append("lastName", lastNameUser);
    formData.append("email", emailUser);
    formData.append("address", "Without address");
    formData.append("password", passwordUser);
    formData.append("imgPerfil", file);

    const result = registerClient(formData);
    result
      .then(() => {
        Swal.fire("Account register successful");
        setRegisted(true);
      })
      .catch((error) => {
        Swal.fire("Error registering account", error);
      });
  };

  return {
    handleChangeUserName,
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
    lastNameUser,
    file,
  };
};
export default useRegisterForm;
