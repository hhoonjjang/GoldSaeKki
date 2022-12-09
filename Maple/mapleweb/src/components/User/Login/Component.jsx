import "./login.css";
import menuLogo from "../Img/menu-logo.png";
import homeLogo from "../Img/home-logo.png";
import mapleLogo from "../Img/maple-logo.png";
import footerLogo from "../Img/login-footer.png";

const LoginComponent = () => {
  return (
    <div className="login-box">
      <div className="login-header">
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
      </div>
      <div className="login-main">
        <p>메이플스토리 로그인</p>
        <div className="login-text">
          <div>메이플ID</div>
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
        </div>
      </div>
      <div className="login-footer">
        <div>
          <img src={footerLogo}></img>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
