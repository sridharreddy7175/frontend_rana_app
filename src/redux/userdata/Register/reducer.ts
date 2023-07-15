import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from "./action";

export const userRegister = (state = {}, action: any) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true };
    case REGISTER_USER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case REGISTER_USER_FAILURE:
      console.log("hhhhhhhhhh")
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
