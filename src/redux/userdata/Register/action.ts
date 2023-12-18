import Axios from "axios";

export const REGISTER_USER_REQUEST:string = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS:string = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE:string = 'REGISTER_USER_FAILURE';


export const registerUser = (user:any, history : any) => {
  return async (dispatch:any) => {
      try {
          dispatch({type : REGISTER_USER_REQUEST});
          let dataURL:string = `${process.env.REACT_APP_EXPRESS_SERVER_URL}/api/users/register`;
          let response = await Axios.post(dataURL, user);
          dispatch({
              type : REGISTER_USER_SUCCESS
          });

          console.log("response-------->",response)
          // TODO create an alert to display success message
          // dispatch(alertActions.setAlert(response.data.msg , 'success'));
          // redirect to login Page
          // history.push('/users/login');
      }
      catch (error) {
          console.error(error);
          dispatch({
              type : REGISTER_USER_FAILURE,
              payload : {
                  error : error
              }
          });
      }
  };
};