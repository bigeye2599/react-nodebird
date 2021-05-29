const dummyUser = {
  nickname: "더미네임",
  Post: [],
  Followings: [],
  Followers: [],
};

export const initialState = {
  isLoggedIn: false,
  user: null,
};

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const loginAction = {
  type: LOG_IN,
};
export const logoutAction = {
  type: LOG_OUT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return { ...state };
  }
};

export default reducer;
