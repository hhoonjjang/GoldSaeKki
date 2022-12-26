import { useDispatch, useSelector } from "react-redux";
import { action } from "../../modules/header";
import styled from "styled-components";
import BugCSContainer from "./BugCs/Container";
import AccountContainer from "./Account/Container";
import AdminLoginContainer from "./AdminLogin/Container";
import FirstContainer from "./HelpCategoryDisplay/Container1";
import UserManageContainer from "./UserManage/Container";
import { useEffect,useState } from "react";
import UserReportContainer from "./Report/Container";
import UserReportContainerComment from "./Report/Container1";
const AdministratorComponet = () => {
  const [commentArr,setComment] = useState([])
  const [boardArr,setBoard] = useState([])
  const [reportArr,setReportArr] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.header("Administrator"));
  }, []);
  const isCookie = document.cookie;
  const tempAdmin = useSelector((state) => state?.admin);
  return (
    <AdminBox>
      {!isCookie ? (
        <>
          <AdminLoginContainer />
          <AccountContainer />
        </>
      ) : (
        <>
          <AdminLoginContainer />
          {tempAdmin?.name == "정재훈" ? (
            <>
              <AccountContainer />
            </>
          ) : (
            <></>
          )}

          <BugCSContainer reportArr={reportArr} setReportArr={setReportArr}/>
          <FirstContainer />
          <UserManageContainer setComment={setComment} setBoard={setBoard} setReportArr={setReportArr}/>
          <UserReportContainer boardArr={boardArr} setBoard={setBoard}/>
          <UserReportContainerComment setComment={setComment} commentArr={commentArr}/>
        </>
      )}
    </AdminBox>
  );
};

export default AdministratorComponet;

const AdminBox = styled.div`
  padding: 30px 30px;
`;
