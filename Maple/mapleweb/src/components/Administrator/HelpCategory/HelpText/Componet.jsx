import { useState } from "react";
import styled from "styled-components";

const HelpTextComponet = ({
  categoryArr,
  textSubmit,
  delCategory,
  editCategory,
  edit,
  cancel,
  isBool,
  editSubmit,
}) => {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [categoryedit, setCategoryEdit] = useState("");
  return (
    <HelpTextBox>
      {categoryArr.map((item, idx) => (
        <Blank key={idx}>
          {isBool == idx ? (
            <Blank>
              <input
                type={text}
                defaultValue={edit}
                onChange={(e) => {
                  setCategoryEdit(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  editSubmit(categoryedit, item.id);
                }}
              >
                확인
              </button>
              <button onClick={cancel}>취소</button>
            </Blank>
          ) : (
            <Blank>
              <div key={`categoryDiv-${idx}`}>{item.category}</div>
              <button
                onClick={() => {
                  delCategory(item.category);
                }}
                key={`deleteBtn-${idx}`}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  editCategory(item.category, idx);
                }}
                key={`editBtn-${idx}`}
              >
                수정
              </button>
            </Blank>
          )}
        </Blank>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          textSubmit(category, text);
        }}
      >
        <div>온라인상담 문의유형선택 카테고리</div>

        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="" selected disabled hidden>
            선택하시오
          </option>
          {categoryArr.map((item, idx) => (
            <option value={item.category} key={`option-${idx}`}>
              {item.category}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="카테고리"
          onInput={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">카테고리추가</button>
      </form>
    </HelpTextBox>
  );
};

export default HelpTextComponet;

const HelpTextBox = styled.div`
  form {
    border-top: 30px dashed lightgray;
    margin-top: 20px;
  }
`;

const Blank = styled.div`
  display: flex;
`;
