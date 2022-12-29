import NicknameChangeComponent from "./Component";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../../../modules/user";
import { useNavigate } from "react-router-dom";

const NicknameChangeContainer = () => {
  const tempUserArr = [];

  const dispacth = useDispatch();
  const navigate = useNavigate();
  const currUserName = useSelector((state) => state.user.currUserName);

  const userInfo = () => {
    // 닉네임 변경하기 전에 디비에 있는 내용 가져와서 temp에 저장. 추후 닉네임 중복 비교를 위해 쓸 예정
    axios
      .post("/api/user/getUser")
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
  };
  const namecheck = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;

  const namecheckFunc = (changeName) => {
    const findName = (elem) => {
      if (elem.userName === changeName) return true;
    };
    const nameresult = namecheck.test(changeName);
    if (changeName.length === 0) {
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

  const changeNameClick = (changeName) => {
    console.log("닉네임 바꿔보자잇");
    if (!changeName) {
      return alert("정보를 입력해주십쇼");
    }
    axios
      .post("/api/user/clearCookie", {
        changeName,
        currUserName,
      })
      .then((data) => {
        console.log(data.data.message);
        return {
          changeName: data.data.changeName,
          serverName: data.data.serverName,
        };
      })
      // .then((data) => {
      //   console.log(data);
      //   // changeName, serverName 받아옴
      // });
      .then((userInfo) => {
        axios.post("/api/user/changename", userInfo).then((data) => {
          console.log("바뀐닉네임", data.data);
          dispacth(
            action.check({
              server: data.data.data.currServerName,
              name: data.data.data.currUserName,
            })
          );
          dispacth(
            action.login({
              currServerName: data.data.data.currServerName,
              currUserName: data.data.data.currUserName,
            })
          );
          alert("성공적으로 닉네임을 변경했습니다.");
          navigate("/mypage");
        });
      });
  };

  return (
    <NicknameChangeComponent
      namecheck={namecheckFunc}
      changeClick={changeNameClick}
      userInfo={userInfo}
    />
  );
};

export default NicknameChangeContainer;
