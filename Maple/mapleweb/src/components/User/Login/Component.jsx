import styled from "styled-components";
import menuLogo from "../Img/menu-logo.png";
import homeLogo from "../Img/home-logo.png";
import mapleLogo from "../Img/goldsaekki-logo-remove.png";
import loginChar from "../Img/login-char.png";
import footerLogo from "../Img/login-footer.png";
import backgroundImg from "../Img/login-background.png";

const LoginComponent = () => {
  return (
    <LoginBox>
      <LoginHeader>
        <div>
          <button>
            <img src={menuLogo} />
          </button>
          <button>
            <img src={homeLogo} />
          </button>
        </div>
        <button>
          <img src={mapleLogo} />
        </button>
      </LoginHeader>
      <LoginMain>
        <p>금쪽이스토리 로그인</p>
        <LoginText>
          <div>금쪽이ID</div>
          <div>
            <input placeholder={"메이플ID"} />
            <span>
              <input type={"checkbox"} />
              ID 저장
            </span>
          </div>
          <div>
            <input placeholder={"PW"} />
          </div>
          <button>로그인</button>
        </LoginText>
      </LoginMain>
      <LoginFooter>
        <div>
          <img src={footerLogo}></img>
        </div>
      </LoginFooter>
    </LoginBox>
  );
};

export default LoginComponent;

const LoginBox = styled.div`
  background-image: url(${backgroundImg});
  background-size: contain;
`;

const LoginHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  & > button {
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  & > div button {
    &:first-child {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    &:last-child {
      background-color: transparent;
      cursor: pointer;
      border: none;
    }
  }

  & > button:last-child img {
    width: 150px;
  }
`;

const LoginMain = styled.div`
  background-image: url(${loginChar});
  background-repeat: no-repeat;
  background-position: bottom;
  height: 700px;

  & p {
    font-size: 50px;
    color: white;
    text-align: center;
    letter-spacing: -0.3rem;
    margin: 10px 0;
  }
`;

const LoginText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;

  & > button {
    width: 600px;
    height: 80px;
    background-color: rgb(246, 133, 0);
    color: white;
    font-size: 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  & div:first-child {
    width: 600px;
    height: 80px;
    background-color: rgb(246, 133, 0);
    color: white;
    font-size: 25px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  & div:nth-child(2) {
    background-color: #17151c;
    color: white;
    width: 600px;
    height: 80px;
    align-items: center;
    justify-content: center;
    display: flex;
  }

  & div:nth-child(3) {
    margin-top: 5px;
    width: 600px;
    height: 80px;
    border: none;
    background-color: #17151c;
    font-size: 20px;
  }

  & div:nth-child(2) > input {
    width: 450px;
    height: 75px;
    border: none;
    background-color: #17151c;
    font-size: 20px;
    color: rgb(118, 118, 118);
  }

  & div:nth-child(2) input:last-child {
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    accent-color: rgb(118, 118, 118);
  }

  & div:nth-child(3) > input {
    width: 500px;
    height: 75px;
    border: none;
    background-color: #17151c;
    padding-left: 35px;
    font-size: 20px;
    color: rgb(118, 118, 118);
  }

  & div:nth-child(2) span {
    font-size: 20px;
    color: rgb(118, 118, 118);
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.15rem;
  }

  & button {
    margin-top: 20px;
  }
`;

const LoginFooter = styled.div`
  height: 150px;
  background-color: rgb(246, 133, 0);
  display: flex;
  align-items: center;
  justify-content: center;
`;
