const TYPE = {
  ONIMG: "/onImg",
};

const onImg = (imgSrc) => {
  return {
    type: TYPE.ONIMG,
    payload: { imgSrc },
  };
};
//액션에 대한 정의

export const action = { onImg };

export const initialize = ``;
// 초기값 = 멀터에서 읽어오는 기본 이미지 경로

export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ONIMG: {
      return `${payload.imgSrc}`;
    }
    default:
      return state;
  }
};
