const TYPE = {
  LOGIN: "/admin/login",
  LOGOUT: "/admin/logout",
};

const login = (name) => {
  console.log(name);
  return {
    type: TYPE.LOGIN,
    payload: { name },
  };
};

const logout = () => {
  return {
    type: TYPE.LOGOUT,
  };
};

export const action = { login, logout };

export const initialize = {};

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  console.log(payload.name);
  switch (type) {
    case TYPE.LOGIN:
      return payload.name;
    default:
      return state;
  }
};
