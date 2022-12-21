import styled from "styled-components";
import { useState } from "react";
const HelpCategoryComponent = ({ categorySubmit }) => {
  const [values, setValues] = useState("");
  return (
    <HelpCategoryBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          categorySubmit(values);
        }}
      >
        <div>온라인상담 문의유형선택</div>

        <input
          type={"text"}
          placeholder={"카테고리"}
          onInput={(e) => {
            setValues(e.target.value);
          }}
        />
        <button type="submit">카테고리 추가</button>
      </form>
    </HelpCategoryBox>
  );
};

export default HelpCategoryComponent;

const HelpCategoryBox = styled.div`
  form {
    margin-top: 20px;
    border-top: 30px dashed lightgray;
  }
`;
