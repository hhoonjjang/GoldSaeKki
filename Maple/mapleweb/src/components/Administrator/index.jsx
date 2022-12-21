import { useDispatch, useSelector } from "react-redux";
import { action } from "../../modules/header";
import styled from "styled-components";
import BugCSContainer from "./BugCs/Container";
import AccountContainer from "./Account/Container";
import AdminLoginContainer from "./AdminLogin/Container";
import HelpCategoryContainer from "./HelpCategory/Container";
import HelpTextContainer from "./HelpCategory/HelpText/Container";
import TextChildContainer from "./HelpCategory/HelpText/TextChild/Container";
import ThirdContainer from "./HelpCategoryDisplay/Container3";
import SecondContainer from "./HelpCategoryDisplay/Container2";
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
          <AccountContainer />
        </>
      ) : (
        <>
          <AdminLoginContainer />
          {tempAdmin?.name == "정재훈" ? (
            <>
              <AccountContainer />
              {/* <AdminListContainer /> */}
            </>
          ) : (
            <></>
          )}

          <BugCSContainer />
          <HelpCategoryContainer />
          <HelpTextContainer />
          <TextChildContainer />
        </>
      )}
      {/* <AdminLoginContainer />
      <AccountContainer />
      <BugCSContainer /> */}
      <SecondContainer />
      <ThirdContainer />
    </AdminBox>
  );
};

export default AdministratorComponet;

const AdminBox = styled.div`
  padding: 30px 30px;
`;
