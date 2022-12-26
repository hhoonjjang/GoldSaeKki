import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NicknameChangeComponent = ({ namecheck, changeClick, userInfo }) => {
  const [changeName, setChangeName] = useState("");

  useEffect(() => {
    userInfo();
  }, []);

  const nameMemo = useMemo(() => {
    return namecheck(changeName);
  }, [changeName]);
  return (
    <NicknameBox>
      <h5>닉네임 변경</h5>
      <input
        type={"text"}
        value={changeName}
        placeholder={"변경하실 닉네임을 적어주세요."}
        onInput={(e) => {
          setChangeName(e.target.value);
        }}
      />
      <button
        className="change-btn"
        onClick={() => {
          changeClick(changeName);
        }}
      >
        변경
      </button>
      <Link to={"/mypage"}>
        <button className="cancel-btn">취소</button>
      </Link>
      <p className={nameMemo.class}>{nameMemo.text}</p>
    </NicknameBox>
  );
};

export default NicknameChangeComponent;

const NicknameBox = styled.div`
  border: 1px solid #5e7bcb;
  & > input {
    width: 250px;
    margin: 10px;
    border: none;
    background-color: lightblue;
    border-radius: 5px;
    height: 50px;
  }

  .red {
    color: red;
    text-align: start;
    font-size: 14px;
    margin-left: 10px;
    padding: 0 0 10px 0;
  }

  .green {
    color: green;
    text-align: start;
    font-size: 14px;
    margin-left: 10px;
    padding: 0 0 10px 0;
  }

  & > h5 {
    padding-left: 20px;
    padding-top: 10px;
    margin: 0;
  }
  .change-btn {
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: #5e7bcb;
    color: white;
    font-size: 18px;
  }

  .cancel-btn {
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
