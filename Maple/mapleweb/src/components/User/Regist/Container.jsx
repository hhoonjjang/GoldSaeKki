import RegistComponent from "./Component";
import { useDispatch } from "react-redux";
import { action } from "../../../modules/regist";
import crypto from "crypto-js";
import axios from "axios";

const tempUserArr = [];

axios
  .post("http://localhost:8080/api/user/getUser")
  .then((data) => {
    console.log(data);
    data?.data?.map((item) => {
      tempUserArr.push(item);
    });
    console.log(tempUserArr);

    // data.data.userId, data.data.userName
  })
  .catch((err) => {
    console.log(err);
  });
const RegistContainer = () => {
  const dispatch = useDispatch();
  // component쪽에서 가져올 데이터들 세팅
  // const alertText = document.getElementsByTagName("p"); //2,4,6 -> 1,3,5
  // console.log(alertText);
  // const registText = document.getElementsByTagName("input");
  // console.log(registText);

  // 아이디 예외처리
  const idcheck = /^[a-z0-9_-]{5,20}$/;

  // 패스워드 예외처리
  const pwcheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  //닉네임 예외처리
  const namecheck = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;

  const idcheckFunc = (userId) => {
    // registText[0].addEventListener("focusout", (e) => {
    // console.log(userId.match(idcheck));
    const findUser = (elem) => {
      if (elem.userId === userId) return true;
    };
    const idresult = idcheck.test(userId);
    console.log(idresult);
    if (userId.length === 0) {
      return {
        text: "사용하실 아이디를 입력해주세요.",
      };
    }
    if (idresult) {
      const tempUser = tempUserArr.find(findUser);
      console.log(tempUser);
      if (tempUser) {
        return {
          class: "red",
          text: "아이디가 중복되었습니다.",
        };
      }
      return {
        class: "green",
        text: "아이디로 사용 가능합니다.",
      };
      // alertText[1].classList.add("green");
      // alertText[1].classList.remove("red");
      // alertText[1].innerText = "아이디로 사용 가능합니다!";
    } else {
      return {
        class: "red",
        text: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
      };
      // alertText[1].classList.remove("green");
      // alertText[1].classList.add("red");
      // alertText[1].innerText =
      //   "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
      // registText[0].value = "";
    }
    // });

    // const temp = userId.match(/[a-z0-9_-]/g);
    // return temp ? temp.join("") : "";
    // match 방법은 따로 공부해볼것
  };

  const pwcheckFunc = (userPw) => {
    const pwresult = pwcheck.test(userPw);
    if (userPw.length === 0) {
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

  const namecheckFunc = (userName) => {
    const findName = (elem) => {
      if (elem.userName === userName) return true;
    };
    const nameresult = namecheck.test(userName);
    if (userName.length === 0) {
      return {
        text: "사용하실 닉네임을 입력해주세요.",
      };
    }
    if (nameresult) {
      const tempName = tempUserArr.find(findName);
      console.log(tempName);
      if (tempName) {
        return {
          class: "red",
          text: "닉네임이 중복되었습니다.",
        };
      }
      return {
        class: "green",
        text: "좋은 닉네임이네요 :)",
      };
    } else {
      return {
        class: "red",
        text: "2~10글자 닉네임을 지어주세요.",
      };
    }
  };

  const registClick = (userId, userPw, userName) => {
    console.log("우선 해보자");
    if (!userId || !userPw || !userName) return alert("정보를 입력해주세요!");
    userPw = crypto.SHA256(userPw).toString();
    axios
      .post("http://localhost:8080/api/user/regist", {
        userId,
        userPw,
        userName,
      })
      .then((data) => {
        console.log(
          "데이터가 DB에 잘 도착했어" + data.userId,
          data.userPw,
          data.userName
        );
      })
      .catch((err) => {
        console.error(err);
      });

    dispatch(action.regist(userId, userPw, userName));
    alert("회원가입에 성공하셨습니다!");
  };
  return (
    <RegistComponent
      registClick={registClick}
      idcheck={idcheckFunc}
      pwcheck={pwcheckFunc}
      namecheck={namecheckFunc}
    />
  );
};

export default RegistContainer;
