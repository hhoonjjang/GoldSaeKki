import styled from "styled-components";
import { useState } from "react";
const AccountComponent = ({ setAccount, accountInfo }) => {
  const [values, setValues] = useState({
    id: "",
    password: "",
    adminName: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAccount(values);
  };
  return (
    <AccountBox>
      <div>관리자등록페이지</div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          name="id"
          placeholder={"아이디"}
          onChange={handleChange}
        ></input>
        <input
          type={"password"}
          name="password"
          placeholder={"비밀번호"}
          onChange={handleChange}
        ></input>
        <input
          type={"text"}
          name="adminName"
          placeholder={"사원이름"}
          onChange={handleChange}
        ></input>
        <button type="submit">관리자등록</button>
      </form>
    </AccountBox>
  );
};

export default AccountComponent;

const AccountBox = styled.div``;
