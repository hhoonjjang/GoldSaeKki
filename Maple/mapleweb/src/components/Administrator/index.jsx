import { useDispatch, useSelector } from "react-redux";
import { action } from "../../modules/header";
import styled from "styled-components";
import BugCSContainer from "./BugCs/Container";
import AccountContainer from "./Account/Container";
import AdminLoginContainer from "./AdminLogin/Container";
import FirstContainer from "./HelpCategoryDisplay/Container1";
import UserManageContainer from "./UserManage/Container";
import { useEffect } from "react";
const AdministratorComponet = () => {
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

          <BugCSContainer />
          <FirstContainer />
        </>
      )}
      <UserManageContainer />
    </AdminBox>
  );
};

export default AdministratorComponet;

const AdminBox = styled.div`
  padding: 30px 30px;
`;
