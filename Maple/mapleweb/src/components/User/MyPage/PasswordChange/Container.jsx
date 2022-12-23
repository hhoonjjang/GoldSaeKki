import PasswordChangeComponent from "./Component";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PasswordChangeContainer = () => {
  const navigate = useNavigate();
  const currUserName = useSelector((state) => state.user.currUserName);

  // 패스워드 예외처리
  const pwcheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  let pwresult;

  const pwcheckFunc = (changePw) => {
    pwresult = pwcheck.test(changePw);
    if (changePw.length === 0) {
      return {
        text: "사용하실 비밀번호를 입력해주세요.",
      };
    }
    if (pwresult) {
      return {
        class: "green",
        text: "멋진 비밀번호네요!",
      };
    } else {
      return {
        class: "red",
        text: "8~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.",
      };
    }
  };

  const pwRecheckFunc = (pwchangeCheck, changePw) => {
    if (pwchangeCheck.length === 0) {
      return {
        text: "비밀번호를 확인해주세요.",
      };
    }
    if (changePw === pwchangeCheck) {
      return {
        class: "green",
        text: "비밀번호가 일치합니다.",
      };
    } else {
      return {
        class: "red",
        text: "비밀번호가 불일치합니다. 다시 확인해주세요.",
      };
    }
  };

  const pwchangeClick = (changePw, pwchangeCheck) => {
    console.log("변경버튼눌렀다.");
    if (!changePw) {
      return alert("바꿀 비밀번호를 입력하세요.");
    } else if (!pwchangeCheck) {
      return alert("비밀번호 확인을 해주세요.");
    } else if (changePw != pwchangeCheck) {
      return alert("비밀번호와 비밀번호확인 정보가 일치하지 않습니다.");
    }
    if (!pwresult) {
      return alert("올바른 비밀번호 형식을 적어주세요.");
    }
    axios
      .post("http://localhost:8080/api/user/pwchange", {
        changePw,
        currUserName,
      })
      .then((data) => {
        console.log(data.data.message);
        alert("비밀번호가 바뀌었으니 다시 로그인해주세요.");
        navigate("/login");
      });
  };
  return (
    <PasswordChangeComponent
      pwcheck={pwcheckFunc}
      pwchangeClick={pwchangeClick}
      pwRecheck={pwRecheckFunc}
    />
  );
};

export default PasswordChangeContainer;
