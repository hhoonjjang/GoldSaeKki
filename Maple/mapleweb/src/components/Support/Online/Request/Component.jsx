import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import styled from "styled-components";

function UncontrolledExample({ categoryArr }) {
  console.log(categoryArr);
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      {categoryArr.map((item, idx) => (
        <Tab eventKey={item.category} title={item.category} key={`Tab-${idx}`}>
          <CategoryBox key={`CategoryBox-${idx}`}>
            {item.Help.map((item, idx) => (
              <div key={`category-${idx}`} className="category">
                <div className="title">{item.text}</div>
                {item.Child.map((item, idx) => (
                  <TextBox key={`TextBox-${idx}`}>
                    <div className="textbox">{item.textChild}</div>
                  </TextBox>
                ))}
              </div>
            ))}
          </CategoryBox>
        </Tab>
      ))}
    </Tabs>
  );
}

export default UncontrolledExample;

const CategoryBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  .category {
    width: 25%;
    margin-bottom: 50px;
    font-size: 20px;
    font-weight: bold;

    & .title{
      margin: 15px 0px;
    }
  }
  .textbox {
    width:100%
    font-size: 15px;
    font-weight: 500;
    color: gray;
    margin-bottom:10px;
    &:hover {
      color: blue;
      cursor: pointer;
      border-bottom: 1px solid blue;
      width: fit-content;
    }
  }
`;

const TextBox = styled.div`
font-size: 15px;
`;
