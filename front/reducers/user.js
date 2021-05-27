export const initialState = {
  isLoggedin: false,
  user: {},
};

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: "닉네임",
  },
};
export const logoutAction = {
  type: LOG_OUT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedin: true,
        user: action.data,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedin: false,
        user: {},
      };
    default:
      return { ...state };
  }
};

export default reducer;
