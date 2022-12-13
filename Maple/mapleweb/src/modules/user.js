const TYPE = {
  LOGIN: "/user/login",
  LOGOUT: "/user/logout",
};

const login = (loginId, loginPw) => {
  return {
    type: TYPE.LOGIN,
    payload: { loginId, loginPw },
  };
};

const logout = () => {
  return {
    type: TYPE.LOGOUT,
    // payload:
  };
};

export const action = { login, logout };

export const initialize = [];
export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGIN:
      return [...state, payload];

    case TYPE.LOGOUT:
      return state;

    default:
      return state;
  }
};
