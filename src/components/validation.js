const validateMethod = (fieldName, value, userInfo,  setUserInfo) => {
    let formValidError = userInfo.formError;
    let emailValid = userInfo.emailValid;
    let passwordValid = userInfo.passwordValid;
    let usernameValid = userInfo.nameValid;

    switch (fieldName) {
      case "name":
        usernameValid = value.length >= 6;
        formValidError.name = usernameValid ? " " : "Name is invalid";
        break;
      case "email":
        emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
        formValidError.email = emailValid ? " " : "Email is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        formValidError.password = passwordValid
          ? " "
          : "Password length is too short";
        break;
      case "comparePassword":
        passwordValid = value === userInfo.confirmPassword;
        formValidError.comparePassword = passwordValid
          ? " "
          : "The password does not match";
        break;
      default:
        break;
    }

    setUserInfo({
      ...userInfo,
      emailValid: emailValid,
      passwordValid: passwordValid,
      formError: formValidError,
      nameValid: usernameValid
    });
  };


  export default validateMethod;