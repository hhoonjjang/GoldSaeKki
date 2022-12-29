import { useDispatch, useSelector } from "react-redux";
import { action } from "../../modules/header";
import styled from "styled-components";
import AccountContainer from "./Account/Container";
import AdminLoginContainer from "./AdminLogin/Container";
import { useEffect,useState } from "react";
import ControlledTabsExample from "./ControlledTabs/ControlledTabs";
import NotFound from "../Community/NotFound";
import { Link, useNavigate } from "react-router-dom";

const AdministratorComponet = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [_render,setRender] = useState(false);
  useEffect(() => {
    dispatch(action.header("Administrator"));
  }, []);
  useEffect(()=>{

  },[_render]);
  const isCookie = document.cookie.split("=")[0];
  // const isCookie = document.cookie.split("="[0]);
  // const tempAdmin = useSelector((state) => state?.admin);
  console.log(isCookie);
  
  return (
    <div>
    {isCookie == "login" ? <NotFound/>:<AdminBox>
      {!isCookie ? (
        <>
          <AdminLoginContainer setRender={setRender} _render={_render}/>
          {/* <AccountContainer /> */}
        </>
      ) : (
        <>
          <AdminLoginContainer setRender={setRender} _render={_render}/>
          <ControlledTabsExample />
        </>
      )}
    </AdminBox>}
    
    </div>
  );
};

export default AdministratorComponet;

const AdminBox = styled.div`
  padding: 30px 30px;
`;
