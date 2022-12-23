import { useState } from "react";

import styled from "styled-components";
const HelpCategoryDisplayComponent = ({
  categoryArr,
  childArr,
  isBool,
  editText,
  textSubmit,
  delBtn,
  editBtn,
  editSubmit,
  cancel,
  a,
  b,
  c,
  children,
}) => {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [edit, setEdit] = useState("");
  return (
    <DisplayBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          textSubmit(category, text);
        }}
      >
        <div>ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</div>
        <div>온라인상담문의유형선택 카테고리 텍스트</div>
        {categoryArr == "" ? (
          <></>
        ) : (
          <select
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option>선택하시오</option>
            {categoryArr.map((item, idx) => (
              <option value={item[c]} key={`childOption-${idx}`}>
                {item[c]}
              </option>
            ))}
          </select>
        )}

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
              {b == "" ? <></> : <span>{item[b]} &gt; </span>}

              <div key={`childTextDiv-${idx}`}>{item[a]}</div>
              <button
                onClick={() => {
                  delBtn(item[a]);
                }}
                key={`childDeleteBtn-${idx}`}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  editBtn(idx, item[a]);
                }}
                key={`childEditBtn-${idx}`}
              >
                수정
              </button>
            </Blank>
          )}
        </Blank>
      ))}
      {children}
    </DisplayBox>
  );
};

export default HelpCategoryDisplayComponent;

const DisplayBox = styled.div``;
const Blank = styled.div`
  display: flex;
`;
