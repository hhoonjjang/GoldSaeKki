import styled from "styled-components";
import { Link } from "react-router-dom";
import registImg from "../Img/regist-header-img.jpg";
import { useState, useMemo } from "react";

const RegistComponent = ({ registClick, idcheck, pwcheck, namecheck }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");

  const idMemo = useMemo(() => {
    return idcheck(userId);
  }, [userId]);
  // return값에 있는 idcheck가 돌아가고, 그 해당 idcheck는 container쪽에 있는
  // idcheckFunc을 가르키며, 해당 함수가 돌아가면서 도출되는 return 객체값(현재는)이 idmemo값이된다.

  const pwMemo = useMemo(() => {
    return pwcheck(userPw);
  }, [userPw]);

  const nameMemo = useMemo(() => {
    return namecheck(userName);
  }, [userName]);
  return (
    <RegistBox>
      <h2>금쪽이스토리 회원 가입</h2>
      <RegistMain>
        <RegistText>
          <p>아이디 </p>
          <input
            placeholder={"아이디"}
            value={userId}
            type={"text"}
            onInput={(e) => {
              // setId(idcheck(e.target.value)); match방식
              setId(e.target.value);
              // idcheck(userId);
            }}
          />
          <p className={idMemo.class}>{idMemo.text}</p>
        </RegistText>
        <RegistText>
          <p>비밀번호 </p>
          <input
            placeholder={"비밀번호"}
            value={userPw}
            type={"password"}
            onInput={(e) => {
              setPw(e.target.value);
              // pwcheck(userPw);
            }}
          />
          <p className={pwMemo.class}>{pwMemo.text}</p>
        </RegistText>
        <RegistText>
          <p>닉네임 </p>
          <input
            placeholder={"닉네임"}
            value={userName}
            type={"text"}
            onInput={(e) => {
              setName(e.target.value);
              // namecheck(userName);
            }}
          />
          <p className={nameMemo.class}>{nameMemo.text}</p>
        </RegistText>
        <ButtonBox>
          {userId && userPw && userName ? (
            <>
              <Link to={"/login"}>
                <button
                  onClick={() => {
                    registClick(userId, userPw, userName);
                  }}
                >
                  회원가입
                </button>
              </Link>
              <Link to={"/login"}>
                <button>취소</button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"#"}>
                <button
                  onClick={() => {
                    registClick(userId, userPw, userName);
                  }}
                >
                  회원가입
                </button>
              </Link>
              <Link to={"/login"}>
                <button> 취소</button>
              </Link>
            </>
          )}
        </ButtonBox>
      </RegistMain>
    </RegistBox>
  );
};

export default RegistComponent;

const RegistBox = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-image: url(${registImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  & > h2 {
    padding-top: 20px;
    text-align: center;
    margin-top: 0;
  }
`;

const RegistMain = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RegistText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p:first-child {
    color: black;
    font-weight: 600;
  }

  & p:last-child {
    font-size: 12px;
  }

  & input {
    width: 250px;
    height: 25px;
    border: 2px solid lightgray;
    background-color: rgb(234, 240, 254);
  }
  & input:first-child {
    margin-left: 10px;
  }

  .green {
    color: green;
  }

  .red {
    color: red;
  }
`;

const ButtonBox = styled.div`
  padding: 20px;

  & > a:first-child {
    & > button {
      width: 100px;
      height: 35px;
      border: none;
      background-color: pink;
      margin-right: 10px;
      color: white;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  & > a:last-child {
    & > button {
      width: 100px;
      height: 35px;
      background-color: white;
      border: 2px solid lightgray;
      margin-right: 10px;
      color: pink;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
