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
    console.log(searchResultData.length);
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
              <td>공지사항</td>
              <td></td>
            </tr>
            <tr>
              <td>커뮤니티</td>
              <td>
                {searchResultData.length == 0 ? (
                  <div className="mainSearchResult_innerBox_resultTable_noneResult">
                    <img src={exclamationIcon} alt="!" />
                    검색된 글이 없습니다.
                  </div>
                ) : searchResultData != undefined ? (
                  <>
                    {searchResultData?.map((item, index) => {
                      return item.category == "금쪽이아트" ? (
                        <div>
                          <div></div>
                          <div></div>
                        </div>
                      ) : (
                        // 나중에 금쪽이아트 기능이 추가되면..
                        <div className="mainSearchResult_innerBox_resultTable_textBoard">
                          <div className="mainSearchResult_innerBox_resultTable_title">
                            <span className="mainSearchResult_innerBox_resultTable_title_category">
                              [{item.category}]
                            </span>
                            <span className="mainSearchResult_innerBox_resultTable_title_world">
                              [{item.world}]
                            </span>
                            <Link to={`/Community/board/${item.id}`}>
                              <span>{item.title}</span>
                            </Link>
                            <span className="mainSearchResult_innerBox_resultTable_title_userName">
                              {item.userName}
                            </span>
                            <span className="mainSearchResult_innerBox_resultTable_title_createdAt">
                              {item.createdAt}
                            </span>
                          </div>
                          <div className="mainSearchResult_innerBox_resultTable_content">
                            <Link to={`/Community/board/${item.id}`}>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.contents,
                                }}
                              ></span>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
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

    @media only screen and (max-width: 1024px) {
      padding-left: 20px;
      padding-right: 20px;
    }

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

      @media only screen and (max-width: 1024px) {
        padding-left: 20px;
        padding-right: 20px;
      }

      td:first-child {
        width: 20%;
        background-color: #f7f7f7;
        border-right: 1px solid #e3e3e3;
        border-bottom: 1px solid #e3e3e3;
        padding-left: 30px;
        padding-right: 30px;
        white-space: nowrap;
      }
      td:last-child {
        width: 80%;
        border-bottom: 1px solid #e3e3e3;
        padding: 40px;

        .mainSearchResult_innerBox_resultTable_noneResult {
          color: #888;
          display: flex;
          justify-content: center;

          img {
            width: 24px;
            height: 24px;
          }
        }

        .mainSearchResult_innerBox_resultTable_textBoard {
          margin-bottom: 10px;

          .mainSearchResult_innerBox_resultTable_title {
            font-size: 14px;

            .mainSearchResult_innerBox_resultTable_title_category {
              color: #1c6ac3;
              margin-right: 7px;
              white-space: nowrap;
            }
            .mainSearchResult_innerBox_resultTable_title_world {
              color: #1c6ac3;
              margin-right: 7px;
              white-space: nowrap;
            }
            a {
              margin-right: 7px;
              text-overflow: ellipsis;
              overflow: hidden;
              white-space: nowrap;
              max-width: 460px;

              span {
                color: #333;
              }
            }
            .mainSearchResult_innerBox_resultTable_title_userName {
              margin-right: 7px;
              font-size: 12px;
              color: #888888;
              white-space: nowrap;
            }
            .mainSearchResult_innerBox_resultTable_title_createdAt {
              font-size: 12px;
              color: #888888;
              white-space: nowrap;
            }
          }
          .mainSearchResult_innerBox_resultTable_content {
            width: 100%;

            span {
              max-width: 100%;
              color: #828282;
              font-size: 13px;

              // white-space: nowrap;

              p {
                max-height: 63px;
                line-height: 21px;
                text-overflow: ellipsis;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
`;
