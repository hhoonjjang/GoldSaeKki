import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import backgroundImg from "../Img/login-background.png";
import loginChar from "../Img/login-char.png";

const RegistComponent = ({ registClick, idcheck, pwcheck, namecheck }) => {
  const [userId, setId] = useState("");
  const [userPw, setPw] = useState("");
  const [userName, setName] = useState("");
  const [server, setServer] = useState("서버 선택");
  console.log(server);

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
        <SelectBox>
          <select
            name="server"
            className="select"
            onChange={(e) => {
              setServer(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="서버 선택">서버 선택</option>
            <option value="리부트">리부트</option>
            <option value="리부트2">리부트2</option>
            <option value="오로라">오로라</option>
            <option value="레드">레드</option>
            <option value="이노시스">이노시스</option>
            <option value="유니온">유니온</option>
            <option value="스카니아">스카니아</option>
            <option value="루나">루나</option>
            <option value="제니스">제니스</option>
            <option value="크로아">크로아</option>
            <option value="베라">베라</option>
            <option value="엘리시움">엘리시움</option>
            <option value="아케인">아케인</option>
            <option value="노바">노바</option>
          </select>
        </SelectBox>
        <ButtonBox>
          {userId && userPw && userName && server != "서버 선택" ? (
            <>
              <Link to={"/login"}>
                <button
                  onClick={() => {
                    registClick(userId, userPw, userName, server);
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
                    registClick(userId, userPw, userName, server);
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
  background-image: url(${backgroundImg});
  background-size: contain;

  & > h2 {
    padding-top: 20px;
    text-align: center;
    margin-bottom: 20px;
    color: white;
  }
`;

const RegistMain = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${loginChar});
  background-repeat: no-repeat;
  background-position: bottom;
  height: 700px;
`;

const RegistText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p:first-child {
    color: white;
    font-weight: 600;
    font-size: 20px;
  }

  & p:last-child {
    font-size: 12px;
    color: white;
  }

  & input {
    width: 400px;
    height: 50px;
    border: 2px solid lightgray;
    background-color: rgb(234, 240, 254);
  }
  & input:first-child {
    margin-left: 10px;
  }

  & .green {
    color: green !important;
  }

  & .red {
    color: red !important;
  }
`;

const ButtonBox = styled.div`
  padding: 20px;

  & > a:first-child {
    & > button {
      width: 150px;
      height: 50px;
      border: none;
      background-color: rgb(246, 133, 0);
      margin-right: 10px;
      color: white;
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  & > a:last-child {
    & > button {
      width: 150px;
      height: 50px;
      background-color: white;
      border: 2px solid lightgray;
      margin-right: 10px;
      color: rgb(246, 133, 0);
      font-weight: 600;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

const SelectBox = styled.div`
  .select {
    width: 150px;
    height: 35px;
    border-radius: 3px;
    border: 2px solid lightgray;
    margin: 10px;
  }
`;
