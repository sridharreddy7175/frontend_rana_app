import * as userActions from "./action";
export interface UserState {
  loading: boolean;
  user: any;
  error: string;
}
let initialState: UserState = {
  loading: false,
  user: {},
  error: "",
};

export const userRegister = (state = initialState, action: any): UserState => {
  switch (action.type) {
    // register User
    case userActions.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActions.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case userActions.REGISTER_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
