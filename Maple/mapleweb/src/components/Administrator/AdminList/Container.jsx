import AdminListComponet from "./Component";
import { useState, useEffect } from "react";
import axios from "axios";
const tempListFun = async (setList) => {
  try {
    let listArr = (await axios.post("http://localhost:8080/api/admin/list"))
      .data;
    setList(listArr);
  } catch (err) {
    console.error(err);
  }
};

const AdminListContainer = () => {
  const [listArr, setList] = useState([]);

  useEffect(() => {
    tempListFun(setList);
  }, []);

  const onClick = async (idx) => {
    console.log(idx);
    axios.post("http://localhost:8080/api/admin/delete", { idx }).then(() => {
      alert("삭제됐습니다.");
      window.location.reload();
    });
  };

  return <AdminListComponet listArr={listArr} onClick={onClick} />;
};

export default AdminListContainer;
