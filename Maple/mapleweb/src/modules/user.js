const TYPE = {
  LOGIN: "/user/login",
  LOGOUT: "/user/logout",
  CHECK: "/user/check",
};

const login = (payload) => {
  return {
    type: TYPE.LOGIN,
    payload,
  };
};

const logout = () => {
  return {
    type: TYPE.LOGOUT,
    // payload:
  };
};

const check = (userInfo) => {
  return {
    type: TYPE.CHECK,
    payload: { currServerName: userInfo.server, currUserName: userInfo.name },
  };
};

export const action = { login, logout, check };

export const initialize = {};

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.LOGIN:
      return payload;

    case TYPE.LOGOUT:
      return state;

    case TYPE.CHECK:
      return payload;

    default:
      return state;
  }
};
