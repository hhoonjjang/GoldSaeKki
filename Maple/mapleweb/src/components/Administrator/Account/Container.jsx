import AccountComponent from "./Component";
import { useState } from "react";
import axios from "axios";
const AccountContainer = () => {
  const [accountInfo, setAccount] = useState({});
  axios.post("http://localhost:8080/api/admin/regist", accountInfo);
  return <AccountComponent setAccount={setAccount} accountInfo={accountInfo} />;
};

export default AccountContainer;
