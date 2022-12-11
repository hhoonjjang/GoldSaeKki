// import Col from "react-bootstrap/Col";
// import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
// import Tab from "react-bootstrap/Tab";
import { Col, Nav, Row, Tab } from "react-bootstrap";

import styled from "styled-components";
import MessageContainer from "../Message/Container";
import MyRequestContainer from "../MyRequest/Container";
import OnlineContainer from "../Online/Container";
function LeftTabsExample() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <TabsBox>
        {" "}
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">온라인상담</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">내 문의내역</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">메세지함</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <OnlineContainer />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>
                  <MyRequestContainer />
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div>
                  <MessageContainer />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </TabsBox>
    </Tab.Container>
  );
}

export default LeftTabsExample;

const TabsBox = styled.div`
  .flex-column .nav-pills .nav-link.active {
    color: black;
  }
`;
