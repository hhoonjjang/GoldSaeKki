import { useState } from "react";
import styled from "styled-components";

import searchBtn from "../Img/main_search_btn.png";

const MainSearchComponent = ({
  searchType,
  searchData,
  setSearchType,
  setSearchData,
  navigateToSearch,
  navigate,
  dispatch,
}) => {
  const [searchDropdown, setSearchDropdown] = useState("false");
  const toggleSearchDropdown = () => {
    setSearchDropdown((state) => !state);
  };
  const searchTypeList = ["제목", "작성자", "태그"];

  return (
    <MainSearch>
      <div className="mainSearch_innerBox">
        <div className="mainSearch_innerBox">
          <div className="mainSearch_innerBox_selectType">
            <div
              className="mainSearch_innerBox_selectType_title"
              onClick={() => {
                toggleSearchDropdown();
              }}
            >
              {searchType}
            </div>
            <div
              className={`mainSearch_innerBox_selectType_items ${
                searchDropdown ? "off" : "on"
              }`}
            >
              {searchTypeList.map((item, index) => {
                return (
                  <div
                    className="mainSearch_innerBox_selectType_item"
                    key={`mainSearch_innerBox_selectType_item_${index}`}
                    onClick={() => {
                      toggleSearchDropdown();
                      setSearchType(item);
                    }}
                  >
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mainSearch_innerBox_inputBox">
            <input
              type="text"
              onInput={(e) => {
                setSearchData(e.target.value);
              }}
            />
            <div
              onClick={() => {
                if (searchData.match(/\S/g)) {
                  navigateToSearch(searchType, searchData, navigate, dispatch);
                  return;
                } else console.log("searchData가 공백인데");
              }}
            >
              <img src={searchBtn} alt="검색한다" />
            </div>
          </div>
        </div>
      </div>
    </MainSearch>
  );
};

export default MainSearchComponent;

const MainSearch = styled.div`
  background-color: rgb(94, 132, 158);
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;

  .mainSearch_innerBox {
    width: 1200px;
    position: relative;
    display: flex;
  }

  .mainSearch_innerBox_selectType {
    width: 200px;
  }
  .mainSearch_innerBox_selectType_title {
    background-color: white;
    border: 1px solid #e3e3e3;
    text-align: center;
    font-size: 13px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .mainSearch_innerBox_selectType_items {
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #474a51;
    position: absolute;
    display: none;
    background-color: white;

    & > div {
      padding-top: 5px;
      padding-bottom: 5px;
      display: flex;
      justify-content: center;
    }

    & span {
      padding-left: 5px;
      padding-right: 5px;
      font-size: 12px;
    }

    &.off {
      overflow: auto;
      transition: 5s;
    }

    &.on {
      display: block;
      overflow: auto;
      transition: 5s;
      position: relative;
    }
  }

  .mainSearch_innerBox_selectType_item:nth-child(n + 2):nth-child(n + 3) {
    border-top: 1px solid #474a51;
  }

  .mainSearch_innerBox_inputBox {
    display: flex;
    background-color: rgb(71, 110, 139);
    width: 250px;
    height: 40px;
  }
`;
