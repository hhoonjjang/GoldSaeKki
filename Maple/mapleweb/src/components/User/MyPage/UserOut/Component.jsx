import styled from "styled-components";
import { Link } from "react-router-dom";

const UserOutComponent = () => {
  return (
    <UserOutBox>
      <p className="alert-msg">
        회원 탈퇴 후 복구가 불가능하니 신중하게 결정하시기 바랍니다.
      </p>
      <UserOutBtnBox>
        <button>회원 탈퇴</button>
        <Link to={"/mypage"}>
          <button>취소</button>
        </Link>
      </UserOutBtnBox>
    </UserOutBox>
  );
};

export default UserOutComponent;

const UserOutBox = styled.div`
  border: 1px solid #5e7bcb;
  .alert-msg {
    font-size: 20px;
    font-weight: 600;
    color: black;
  }
`;

const UserOutBtnBox = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & button:first-child {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #5e7bcb;
    color: white;
    font-size: 18px;
  }

  & button:last-child {
    width: 150px;
    height: 50px;
    margin-left: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
    color: #5e7bcb;
  }
`;
