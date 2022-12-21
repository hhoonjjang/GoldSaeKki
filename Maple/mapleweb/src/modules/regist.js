import crypto from "crypto-js";

const TYPE = {
  REGIST: "/user/regist",
};

const regist = (userId, userPw, userName, serverName) => {
  return {
    type: TYPE.REGIST,
    payload: { userId, userPw, userName, serverName },
  };
};

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.REGIST:
      payload.userPw = crypto.SHA256(payload.userPw).toString();
      return [...state, payload];

    default:
      return state;
  }
};

// 서버에 연결해서 데이터 저장할 때
// payload.userPw = crypto.SHA256(payload.userPw).toString();
// return [...state, payload];
