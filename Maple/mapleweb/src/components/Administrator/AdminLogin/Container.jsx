import AdminLoginComponent from "./Component";
import { useState } from "react";
import axios from "axios";

const AdminLoginContainer = () => {
  const [accountInfo, setAccount] = useState({});
  console.log(accountInfo);
  const tempAdmin = axios.post(
    "http://localhost:8080/api/admin/login",
    accountInfo
  );
  console.log(tempAdmin);
  return (
    <AdminLoginComponent setAccount={setAccount} accountInfo={accountInfo} />
  );
};

export default AdminLoginContainer;
