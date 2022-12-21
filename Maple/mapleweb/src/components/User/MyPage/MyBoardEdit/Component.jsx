import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyBoardEditComponent = ({ getMyBoard, boardList }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getMyBoard();
  }, []);
  return (
    <MyBoardBox>
      <MyBoardListBox>
        {boardList?.map((item, idx) => {
          return (
            <div
              key={`board-${idx}`}
              onClick={() => {
                navigate(`/Community/board/${item.id}`);
              }}
            >
              {idx + 1}. {item.title}
            </div>
          );
        })}
      </MyBoardListBox>
    </MyBoardBox>
  );
};

export default MyBoardEditComponent;

const MyBoardBox = styled.div`
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

const MyBoardListBox = styled.div`
  margin: 10px;
  padding: 10px;
  border: 2px solid #5e7bcb;
  color: #666;

  & > div:hover {
    cursor: pointer;
  }
`;
