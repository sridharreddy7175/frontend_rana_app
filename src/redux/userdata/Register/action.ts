import axios from "axios";
// import appConfig from "../../../config/constant";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// SIGNIN a User
export const registerUser:any = (userdata: any) => {
  const { name, phone, email, password } = userdata;
  console.log("userData------>", userdata);
  return async (dispatch: any) => {
    dispatch({ type: REGISTER_USER_REQUEST });
    const requestBody = {
      name: name,
      phone: phone,
      email: email,
      password: password,
    };
    console.log("ree", requestBody);

    try {

      // let dataURL = appConfig.BASE_URL + "/" + "createUser";
      let dataURL=''
      let response = await axios.post(dataURL, requestBody);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data });
    } catch (error: any) {
      console.log("error",error.response.data.error)
      dispatch({ type: REGISTER_USER_FAILURE, payload: error.response.data });
    }
  };
};
