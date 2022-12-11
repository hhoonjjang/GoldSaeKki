import crypto from "crypto-js";

const TYPE = {
  REGIST: "/regist",
};

const regist = (userId, userPw, userName) => {
  return {
    type: TYPE.REGIST,
    payload: { userId, userPw, userName },
  };
};

export const action = { regist };

export const initialize = [];

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.REGIST:
      // axios.post("/api/user/regist", action.payload).then((data) => {

      //     return [...state, payload];
      // }).catch((err) => {
      //     return state;
      // }) 서버에 연결해서 데이터 저장할 때
      payload.userPw = crypto.SHA256(payload.userPw).toString();
      return [...state, payload];
    default:
      return state;
  }
};
