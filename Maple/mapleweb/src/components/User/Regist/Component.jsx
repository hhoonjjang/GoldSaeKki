import styled from "./regist.css";

const RegistComponent = () => {
  return (
    <div className="main">
      <h2>메이플스토리 회원 가입</h2>
      <div className="regist-main">
        <div>
          <span>아이디 </span>
          <input />
          <p>사용하실 아이디를 입력해주세요.</p>
        </div>
        <div>
          <span>비밀번호 </span>
          <input />
          <p>사용하실 비밀번호를 입력해주세요.</p>
        </div>
        <div>
          <span>닉네임 </span>
          <input />
          <p>사용하실 닉네임을 입력해주세요.</p>
        </div>
        <div>
          <button>회원가입</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
};

export default RegistComponent;
