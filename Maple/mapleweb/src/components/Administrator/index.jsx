import { useDispatch, useSelector } from "react-redux";
import { action } from "../../modules/header";
import styled from "styled-components";
import AccountContainer from "./Account/Container";
import AdminLoginContainer from "./AdminLogin/Container";
import { useEffect,useState } from "react";
import ControlledTabsExample from "./ControlledTabs/ControlledTabs";
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
          {/* <AccountContainer /> */}
        </>
      ) : (
        <>
          <AdminLoginContainer />
        
          <ControlledTabsExample />
         
        </>
      )}
    </AdminBox>
  );
};

export default AdministratorComponet;

const AdminBox = styled.div`
  padding: 30px 30px;
`;
