import AccountComponent from "./Component";
import { useState } from "react";
import axios from "axios";
const AccountContainer = () => {
  const [accountInfo, setAccount] = useState({});
  axios.post("http://localhost:8080/api/admin/regist", accountInfo).then(() => {
    alert("예리미가 등록시켰어요");
    window.location.reload();
  });
  return <AccountComponent setAccount={setAccount} accountInfo={accountInfo} />;
};

export default AccountContainer;
