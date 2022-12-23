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
                {/* 여기다 복사 */}
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
