import "./regist.css";

const RegistComponent = () => {
  return (
    <div className="regist-box">
      <h2>메이플스토리 회원 가입</h2>
      <div className="regist-main">
        <div className="regist-text">
          <p>아이디 </p>
          <input placeholder={"아이디"} />
          <p>
            사용하실 <strong>아이디</strong>를 입력해주세요.
          </p>
        </div>
        <div className="regist-text">
          <p>비밀번호 </p>
          <input placeholder={"비밀번호"} />
          <p>
            사용하실 <strong>비밀번호</strong>를 입력해주세요.
          </p>
        </div>
        <div className="regist-text">
          <p>닉네임 </p>
          <input placeholder={"닉네임"} />
          <p>
            사용하실 <strong>닉네임</strong>을 입력해주세요.
          </p>
        </div>
        <div className="button-box">
          <button>회원가입</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default RegistComponent;
