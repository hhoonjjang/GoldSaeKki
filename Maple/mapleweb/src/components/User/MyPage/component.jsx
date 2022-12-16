import styled from "styled-components";
import backimg from "../Img/backimg.png";
import profileimg from "../Img/catimg.png";
import NavigateComp from "../../Community/Navigation/Component";
import { useDispatch } from "react-redux";
import { action } from "../../../modules/header";
import { Link, useParams } from "react-router-dom";
import ImgChangeContainer from "./ImgChange/Container";
import NicknameChangeContainer from "./NicknameChange/Container";
import MyBoardEditContainer from "./MyBoardEdit/Container";

import UserOutContainer from "./UserOut/Container";
import { useSelector } from "react-redux";
import MyCommentEditContainer from "./MyCommentEdit/Container";


const MypageComponent = () => {
  const dispatch = useDispatch();
  const route = useParams();
  const currUserName = useSelector((state) => state.user.currUserName);
  const currUserWorld = useSelector((state) => state.user.currServerName);
  console.log(route);
  dispatch(action.header("Mypage"));
  const CATEGORY = [
    {
      name: "내정보 관리",
      label: "../",
      link: "/mypage",
    },
  ];

  const myDiv = () => {
    switch (route.route) {
      case "userInfo1":
        return <ImgChangeContainer />;

      case "userInfo2":
        return <NicknameChangeContainer />;

      case "userInfo3":
        return <MyBoardEditContainer />;

      case "userInfo4":
        return <MyCommentEditContainer />;

      case "userInfo5":
        return <UserOutContainer />;
      default:
        return (
          <ul>
            <Link to={"/mypage/userInfo1"}>
              <li>- 대표이미지 변경</li>
            </Link>
            <Link to={"/mypage/userInfo2"}>
              <li>- 닉네임 변경</li>
            </Link>
            <Link to={"/mypage/userInfo3"}>
              <li>- 내가 쓴 글 관리</li>
            </Link>
            <Link to={"/mypage/userInfo4"}>
              <li>- 내가 쓴 댓글 관리</li>
            </Link>
            <Link to={"/mypage/userInfo5"}>
              <li>- 회원탈퇴</li>
            </Link>
          </ul>
        );
    }
  };

  return (
    <>
      <NavigateComp categorys={CATEGORY} />
      <MypageBox>
        <MypageContents>
          <LeftContent>
            <img src={profileimg} alt="프로필사진" />
            <p>닉네임 : {currUserName}</p>
            <p> 월드 : {currUserWorld}</p>
          </LeftContent>
          <RightContent>
            <div>
              <p>내정보 관리</p>
            </div>
            {myDiv()}
          </RightContent>
        </MypageContents>
      </MypageBox>
      :<></>
    </>
  );
};
export default MypageComponent;

const MypageBox = styled.div`
  width: 1200px;
  min-height: 500px;
  margin: 0 auto;
  /* background-image: url(${backimg}); */
  /* background-repeat: no-repeat; */
  /* background-size: contain; */
`;
const MypageContents = styled.div`
  width: 100%;
  display: flex;
  float: left;
`;

const LeftContent = styled.div`
  padding: 20px;
  & > img {
    width: 200px;
  }

  & > p {
    text-align: center;
  }
`;

const RightContent = styled.div`
  padding: 20px;
  width: 100%;

  & div:first-child {
    background-color: #5e7bcb;
  }

  & > div > p {
    font-size: 25px;
    text-align: center;
    color: white;
    padding: 10px 0;
    margin: 0;
  }
  & > ul {
    list-style: none;
    border: 1px solid #5e7bcb;
    display: flex;
    flex-direction: column;
  }

  & > ul > a > li {
    margin: 10px 0;
    color: #666;
  }
  & > ul > a > li:hover {
    color: #5e7bcb;
  }
`;
