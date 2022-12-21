import { useState } from "react";
import styled from "styled-components";

const TextChildComponent = ({
  textArr,
  textSubmit,
  delText,
  childArr,
  delChild,
  editChild,
  isBool,
  editText,
  editSubmit,
  cancel,
  editTextCategory,
  textEdit,
  isBoolen,
  editCategorySubmit,
  categoryCancel,
}) => {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [edit, setEdit] = useState("");
  const [editCategory, setEditCategory] = useState("");
  console.log(editText);
  console.log(isBool);
  return (
    <TextChildBox>
      {textArr.map((item, idx) => (
        <Blank key={`text-${idx}`}>
          {isBoolen == idx ? (
            <Blank>
              <input
                type={text}
                defaultValue={textEdit}
                onChange={(e) => {
                  setEditCategory(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  editCategorySubmit(editCategory, item.id);
                }}
              >
                수정확인
              </button>
              <button onClick={categoryCancel}>취소</button>
            </Blank>
          ) : (
            <Blank>
              <span>{item.helpCategory} &gt; </span>
              <div key={`textDiv-${idx}`}>{item.text}</div>
              <button
                onClick={() => {
                  delText(item.text);
                }}
                key={`deleteBtn-${idx}`}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  editTextCategory(idx, item.text);
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
        <div>온라인상담문의유형선택 카테고리 텍스트</div>

        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="" selected disabled hidden>
            선택하시오
          </option>
          {textArr.map((item, idx) => (
            <option value={item.text} key={`childOption-${idx}`}>
              {item.text}
            </option>
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
      {childArr.map((item, idx) => (
        <Blank key={`child-${idx}`}>
          {isBool == idx ? (
            <Blank>
              <input
                type={text}
                defaultValue={editText}
                onChange={(e) => {
                  console.log(e.target.value);
                  setEdit(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  editSubmit(edit, item.id);
                }}
              >
                수정확인
              </button>
              <button onClick={cancel}>취소</button>
            </Blank>
          ) : (
            <Blank>
              <span>{item.Helptext.text} &gt; </span>

              <div key={`childTextDiv-${idx}`}>{item.textChild}</div>
              <button
                onClick={() => {
                  delChild(item.textChild);
                }}
                key={`childDeleteBtn-${idx}`}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  editChild(idx, item.textChild);
                }}
                key={`childEditBtn-${idx}`}
              >
                수정
              </button>
            </Blank>
          )}
        </Blank>
      ))}
    </TextChildBox>
  );
};

export default TextChildComponent;

const TextChildBox = styled.div`
  //   padding: 30px 30px;

  form {
    margin-top: 20px;
    border-top: 30px dashed lightgray;
  }
`;

const Blank = styled.div`
  display: flex;
`;
