import { useState } from "react";
const AdminLoginComponent = ({ setAccount, accountInfo }) => {
  const [values, setValues] = useState({
    id: "",
    password: "",
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
    <div>
      <div>관리자로그인하기</div>
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
        <button type="submit">관리자등록</button>
      </form>
    </div>
  );
};

export default AdminLoginComponent;
