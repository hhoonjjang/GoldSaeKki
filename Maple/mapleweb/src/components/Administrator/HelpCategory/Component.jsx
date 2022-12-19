import styled from "styled-components";
import { useState } from "react";
const HelpCategoryComponent = ({ categorySubmit }) => {
  const [values, setValues] = useState("");
  return (
    <HelpCategoryBox>
      <div>온라인상담 문의유형선택 카테고리</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          categorySubmit(values);
        }}
      >
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

const HelpCategoryBox = styled.div``;
