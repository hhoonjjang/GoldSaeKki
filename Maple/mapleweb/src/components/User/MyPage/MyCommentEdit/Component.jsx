import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";

const MyCommentEditComponent = ({ commentList, getMycomment }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getMycomment();
  }, []);
  return (
    <MyCommentBox>
      <MyCommentListBox>
        {commentList?.map((item, idx) => {
          console.log(item);
          return (
            <div
              key={`comment-${idx}`}
              onClick={() => {
                navigate(`/Community/board/${item.boardId}`);
              }}
            >
              {idx + 1}. {item.text}
            </div>
          );
        })}
      </MyCommentListBox>
    </MyCommentBox>
  );
};

export default MyCommentEditComponent;

const MyCommentBox = styled.div`
  & > button {
    margin: 10px 0 0 10px;
    border: none;
    background-color: #5e7bcb;
    width: 150px;
    height: 40px;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
  }
`;

const MyCommentListBox = styled.div`
  margin: 10px;
  padding: 10px;
  border: 2px solid #5e7bcb;
  color: #666;

  & > div:hover {
    cursor: pointer;
  }
`;
