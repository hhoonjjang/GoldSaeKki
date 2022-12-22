import styled from "styled-components";
import { useState } from "react";
const UserManageComponent = ({
  userSubmit,
  userArr,
  tempuser,
  delBtn,
  msgSubmit,
}) => {
  const [searchUser, setUser] = useState("");
  const [isBool, setBool] = useState(false);
  const [msg, setMsg] = useState("");
  return (
    <UserManageBox>
      <div>유저관리디스플레이</div>
      <table>
        <colgroup>
          <col width={"30%"} />
          <col width={"30%"} />
          <col width={"20%"} />
          <col width={"20%"} />
        </colgroup>

        <thead>
          <tr>
            <th>번호</th>
            <th>유저이름</th>
            <th>서버</th>
            <th>가입날짜</th>
          </tr>
        </thead>
        <tbody>
          {userArr.map((item, idx) => (
            <tr key={`userbox-${idx}`}>
              <td key={`userIdx-${idx}`}>{idx}</td>
              <td key={`userName-${idx}`}>{item.userName}</td>
              <td key={`userServer-${idx}`}>{item.serverName}</td>
              <td key={`userDate-${idx}`}>{item.createdAt.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          userSubmit(searchUser);
          setUser("");
        }}
      >
        <input
          type="text"
          value={searchUser}
          placeholder="검색할 유저닉네임"
          onInput={(e) => {
            console.log(e.target.value);
            setUser(e.target.value);
          }}
        />
        <button type="submit">유저검색</button>
      </form>
      {tempuser != "" ? (
        <table>
          <colgroup>
            <col width={"30%"} />
            <col width={"30%"} />
            <col width={"15%"} />
            <col width={"15%"} />
            <col width={"10%"} />
          </colgroup>

          <thead>
            <tr>
              <th>유저아이디</th>
              <th>유저이름</th>
              <th>서버</th>
              <th>메세지버튼</th>
              <th>삭제버튼</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tempuser.userId}</td>
              <td>{tempuser.userName}</td>
              <td>{tempuser.serverName}</td>
              <td>
                <button
                  onClick={() => {
                    setBool(!isBool);
                  }}
                >
                  메세지보내기
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    delBtn(tempuser.userName);
                  }}
                >
                  삭제하기
                </button>
              </td>
            </tr>

            {isBool ? (
              <tr>
                <td colSpan={3}>
                  <textarea
                    value={msg}
                    onInput={(e) => {
                      setMsg(e.target.value);
                    }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => {
                      msgSubmit(msg, tempuser.userName);
                      setBool(!isBool);
                    }}
                  >
                    보내기
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      setBool(!isBool);
                    }}
                  >
                    취소
                  </button>
                </td>
              </tr>
            ) : (
              <></>
            )}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </UserManageBox>
  );
};

export default UserManageComponent;

const UserManageBox = styled.div`
  table {
    text-align: center;

    width: 100%;
  }
  textarea {
    width: 80%;
    height: 100px;
  }
`;
