const TYPE = {
  LOGIN: "/user/login",
  LOGOUT: "/user/logout",
  CHECK: "/user/check",
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

const check = (currUserName) => {
  return {
    type: TYPE.CHECK,
    payload: { currUserName },
  };
};

export const action = { login, logout, check };

export const initialize = {};

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGIN:
      return { ...state, loginId: payload.loginId, loginPw: payload.loginPw };

    case TYPE.LOGOUT:
      return state;

    case TYPE.CHECK:
      return { ...state, currUserName: payload.currUserName };

    default:
      return state;
  }
};
