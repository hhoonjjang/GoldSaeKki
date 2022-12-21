import styled from "styled-components";

const ImgChangeComponent = ({ imgUploadSubmit }) => {
  return (
    <ImgChangeBox>
      <h5>대표 이미지 변경</h5>
      <form
        id="imgchange-form"
        encType="multipart/form-data"
        onSubmit={(e) => {
          imgUploadSubmit(e);
        }}
      >
        <input
          name="imgselectfile" // 이 녀석으로 멀터 통신 시 name 지정
          type="file"
        ></input>
        <ImgchangeBtnBox>
          <button>변경</button>
          <button>취소</button>
        </ImgchangeBtnBox>
      </form>
    </ImgChangeBox>
  );
};
export default ImgChangeComponent;

const ImgChangeBox = styled.div`
  & > h5 {
    margin: 0;
    padding-left: 20px;
    padding-top: 10px;
  }

  & > form > input {
    padding: 10px 0 10px 20px;
  }
`;

const ImgchangeBtnBox = styled.div`
  & > button:first-child {
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #5e7bcb;
    color: white;
    font-size: 18px;
    margin-left: 20px;
  }

  & > button:last-child {
    width: 80px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    color: #5e7bcb;
    font-size: 18px;
    margin-left: 5px;
  }
`;
