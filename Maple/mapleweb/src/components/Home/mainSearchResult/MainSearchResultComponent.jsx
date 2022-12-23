import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import exclamationIcon from "../Img/main_search_noneResult.png";

const MainSearchResultComponent = ({
  searchType,
  searchData,
  searchResultData,
}) => {
  const listItem = ["업데이트 정보센터", "가이드", "커뮤니티"];
  console.log(searchResultData);
  useEffect(() => {
    console.log(searchResultData);
  }, [searchResultData]);
  return (
    <MainSearchResult>
      <div className="mainSearchResult_innerBox">
        <div className="mainSearchResult_innerBox_summaryBox">
          '<span>{searchData}</span>'(으)로 '<span>{searchType}</span>' 검색한
          결과입니다.
        </div>
        <table className="mainSearchResult_innerBox_resultTable">
          <tbody>
            <tr>
              <td>업데이트 정보센터</td>
              <td></td>
            </tr>
            <tr>
              <td>가이드</td>
              <td></td>
            </tr>
            <tr>
              <td>커뮤니티</td>
              <td>
                {!searchResultData ? (
                  <div className="mainSearchResult_innerBox_resultTable_noneResult">
                    {/* <img src={exclamationIcon} alt="!" /> */}
                    검색된 글이 없습니다.
                  </div>
                ) : searchResultData != undefined ? (
                  <>
                    {/* {searchResultData && */}
                    {/* searchResultData?.map((item, index) => { */}
                    {/* return item.category == "금쪽이아트" ? ( */}
                    {/* <div> */}
                    {/* <div></div> */}
                    {/* <div></div> */}
                    {/* </div> */}
                    {/* ) : ( */}
                    {/* // 나중에 금쪽이아트 기능이 추가되면.. */}
                    {/* <div> */}
                    {/* <div> */}
                    {/* <span>{item.category}</span> */}
                    {/* <span>{item.world}</span> */}
                    {/* <Link to={`/Community/board/${item.id}`}> */}
                    {/* <span>{item.title}</span> */}
                    {/* </Link>{" "} */}
                    {/* <span>{item.writer}</span> */}
                    {/* <span>{item.createdAt}</span> */}
                    {/* </div> */}
                    <div></div>
                    {/* </div> */}
                    {/* ); */}
                    {/* })} */}
                  </>
                ) : (
                  <></>
                )}
                <div></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainSearchResult>
  );
};
export default MainSearchResultComponent;

const MainSearchResult = styled.div`
  display: flex;
  justify-content: center;

  .mainSearchResult_innerBox {
    width: 1200px;

    .mainSearchResult_innerBox_summaryBox {
      display: flex;
      background-color: #f7f7f7;
      text-align: center;
      padding-top: 25px;
      padding-bottom: 25px;
      border-top: 1px solid #e3e3e3;
      border-bottom: 1px solid #e3e3e3;
      justify-content: center;
      margin-top: 80px;
      margin-bottom: 40px;

      span {
        color: #1c6ac3;
      }
    }

    .mainSearchResult_innerBox_resultTable {
      border-top: 1px solid #e3e3e3;
      border-bottom: 1px solid #e3e3e3;
      width: 100%;
      margin-bottom: 50px;

      td:first-child {
        width: 20%;
        background-color: #f7f7f7;
        border-right: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        padding-left: 30px;
      }
      td:last-child {
        width: 80%;
        border-bottom: 1px solid #e3e3e3;
        padding: 40px;

        .mainSearchResult_innerBox_resultTable_noneResult {
          color: #888;
        }
      }
    }
  }
`;
