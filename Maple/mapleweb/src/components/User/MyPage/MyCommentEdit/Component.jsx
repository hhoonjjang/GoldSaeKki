import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";

const MyCommentEditComponent = ({ commentList, getMycomment, currUser }) => {
  const navigate = useNavigate();
  const [nowPage, setNowPage] = useState(1);

  const handlePageChange = (page) => {
    setNowPage(page);
  };

  let newBoards = [];
  if (commentList) {
    commentList?.map((item, idx) => {
      if (idx >= (nowPage - 1) * 5 && idx < nowPage * 5) {
        newBoards.push(item);
      }
    });
  }

  useEffect(() => {
    if (currUser) getMycomment();
  }, [currUser]);
  return (
    <MyCommentBox>
      <MyCommentListBox>
        <div style={{ fontWeight: "bold" }}>
          총 댓글 수 : {commentList.length}개
        </div>
        {newBoards?.map((item, idx) => {
          const tempDate = item.createdAt;
          const commentDate = tempDate.split("T");
          return (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
                key={`comment-${idx}`}
                onClick={() => {
                  navigate(`/Community/board/${item.boardId}`);
                }}
              >
                <div style={{ display: "inline-block" }}>
                  <span> {item.text}</span>
                </div>
                <span className="board_time">{commentDate[0]}</span>
              </div>
              <div
                className="back-btn"
                onClick={() => {
                  navigate("/mypage");
                }}
              >
                뒤로가기
              </div>
            </>
          );
        })}
        <PagenationWrap>
          <Pagination
            // 현재 페이지
            activePage={nowPage}
            // 띄울 게시글 개수
            itemsCountPerPage={5}
            // 총 게시글 개수
            totalItemsCount={commentList?.length || 0}
            // 표시할 개수
            pageRangeDisplayed={10}
            // 이전을 나타낼 아이콘
            prevPageText={"‹"}
            // 다음을 나타낼 아이콘
            nextPageText={"›"}
            // 페이지네이션 함수
            onChange={handlePageChange}
          />
        </PagenationWrap>
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
  .back-btn {
    cursor: pointer;
    background-color: #5e7bcb;
    width: 90px;
    color: white;
    padding: 8px;
    text-align: center;
    border-radius: 5px;
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }

  ul.pagination li:first-child {
    /* border-radius: 5px 0 0 5px; */
    border-radius: 3px 0 0 3px;
  }

  ul.pagination li:last-child {
    /* border-radius: 0 5px 5px 0; */
    border-radius: 0 3px 3px 0;
  }

  ul.pagination li a {
    text-decoration: none;
    /* color: #337ab7; */
    color: #5e7bcb;
    font-size: 1rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    /* background-color: #337ab7; */
    background-color: #5e7bcb;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
    /* color: blue; */
    color: #5e7bcb;
  }

  .page-selection {
    width: 48px;
    height: 30px;
    /* color: #337ab7; */
    color: #5e7bcb;
  }
`;

const MyCommentListBox = styled.div`
  padding: 10px;
  border: 1px solid #5e7bcb;
  color: #666;

  & > div:hover {
    cursor: pointer;
  }
`;

const PagenationWrap = styled.div`
  float: left;
  width: 100%;
`;
