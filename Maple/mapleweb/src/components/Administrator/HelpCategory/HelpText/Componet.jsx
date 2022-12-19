import { useState } from "react";
import styled from "styled-components";

const HelpTextComponet = ({ categoryArr, textSubmit }) => {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  return (
    <HelpTextBox>
      <div>온라인 문의유형선택 카테고리 텍스트</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          textSubmit(category, text);
        }}
      >
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          {categoryArr.map((item, idx) => (
            <option value={item.category}>{item.category}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="텍스트"
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">텍스트추가</button>
      </form>
    </HelpTextBox>
  );
};

export default HelpTextComponet;

const HelpTextBox = styled.div``;
