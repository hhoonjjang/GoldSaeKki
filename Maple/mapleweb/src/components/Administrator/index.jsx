import { useDispatch, useSelector } from "react-redux";
import { action } from "../../modules/header";
import styled from "styled-components";
import BugCSContainer from "./BugCs/Container";
import AccountContainer from "./Account/Container";
import AdminLoginContainer from "./AdminLogin/Container";
const AdministratorComponet = () => {
  const dispatch = useDispatch();
  dispatch(action.header("Administrator"));
  const isCookie = document.cookie;
  const tempAdmin = useSelector((state) => state?.admin);
  return (
    <AdminBox>
      {!isCookie ? (
        <>
          <AdminLoginContainer />
        </>
      ) : (
        <>
          {tempAdmin?.name == "정재훈" ? <AccountContainer /> : <></>}

          <AdminLoginContainer />
          <BugCSContainer />
        </>
      )}
      {/* <AdminLoginContainer />
      <AccountContainer />
      <BugCSContainer /> */}
    </AdminBox>
  );
};

export default AdministratorComponet;

const AdminBox = styled.div``;
