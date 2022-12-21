const TYPE = {
  LOGIN: "/admin/login",
  LOGOUT: "/admin/logout",
  CHECK: "/admin/check",
};

const login = (name) => {
  console.log(name);
  return {
    type: TYPE.LOGIN,
    payload: { name },
  };
};

const check = (name) => {
  console.log(name);
  return {
    type: TYPE.LOGIN,
    payload: name,
  };
};

const logout = () => {
  return {
    type: TYPE.LOGOUT,
  };
};

export const action = { login, logout, check };

export const initialize = {};

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  // console.log(payload);
  switch (type) {
    case TYPE.LOGIN:
      return { name: payload.name };
    case TYPE.CHECK:
      return payload.name;
    case TYPE.LOGOUT:
      return initialize;

    default:
      return state;
  }
};
