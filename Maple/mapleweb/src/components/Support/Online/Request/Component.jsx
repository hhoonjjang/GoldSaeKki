import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="아이디정보/보안">
        1설치
      </Tab>
      <Tab eventKey="profile" title="결제">
        1
      </Tab>
      <Tab eventKey="contact" title="게임 문의">
        1
      </Tab>
      <Tab eventKey="event" title="이벤트">
        1
      </Tab>
      <Tab eventKey="restore" title="복구">
        1
      </Tab>
      <Tab eventKey="install/execut" title="설치/실행">
        1
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;
