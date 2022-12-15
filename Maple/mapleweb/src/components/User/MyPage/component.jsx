import styled from "styled-components";
import backimg from "../Img/backimg.png";
import profileimg from "../Img/catimg.png";
import NavigateComp from "../../Community/Navigation/Component";
import { useDispatch } from "react-redux";
import { action } from "../../../modules/header";
import { Link, Route, Routes } from "react-router-dom";
import ImgChangeContainer from "./ImgChange/Container";
const MypageComponent = () => {
  const dispatch = useDispatch();
  dispatch(action.header("Mypage"));
  const CATEGORY = [
    {
      name: "내정보 관리",
      label: "",
      link: "/mypage",
    },
  ];

  return (
    <>
      <NavigateComp categorys={CATEGORY} />
      <MypageBox>
        <MypageContents>
          <LeftContent>
            <img src={profileimg} alt="프로필사진" />
            <p>여기에 로그인된 닉네임</p>
          </LeftContent>
          <RightContent>
            <div>
              <p>내정보 관리</p>
            </div>
            <ul>
              <Link to={"/Mypage/userInfo1"}>
                <li>- 대표이미지 변경</li>
              </Link>
              <li>- 닉네임 변경</li>
              <li>- 내가 쓴 글 관리</li>
              <li>- 내가 쓴 댓글 관리</li>
              <li>- 회원탈퇴</li>
            </ul>
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
    margin: 20px;
  }

  & > p {
    text-align: center;
  }
`;

const RightContent = styled.div`
  padding: 20px;
  width: 100%;

  & > div {
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
