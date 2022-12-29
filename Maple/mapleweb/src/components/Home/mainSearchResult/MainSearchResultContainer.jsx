import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { action as actionHeader } from "../../../modules/header";
import { action as actionSearch } from "../../../modules/search";

import MainSearchResultComponent from "./MainSearchResultComponent";

const getSearchList = async (searchType, searchData, setSearchResultData) => {
  console.log("searchType : ", searchType);
  console.log("searchData : ", searchData);

  const data = await axios.post("/api/search/mainSearch", {
    searchType: searchType,
    searchData: searchData,
  });
  const searchResult = data.data.searchResult;
  console.log(searchResult);
  for (let i = 0; i < searchResult.length; i++) {
    const year = searchResult[i].createdAt.slice(0, 4);
    const month = searchResult[i].createdAt.slice(5, 7);
    const date = searchResult[i].createdAt.slice(8, 10);
    searchResult[i].createdAt = `${year}.${month}.${date}`;
  }
  setSearchResultData(searchResult);
};

const navigateToSearch = async (
  researchType,
  researchData,
  navigate,
  dispatch
) => {
  dispatch(actionSearch.search(researchType, researchData));
  navigate("/Search", {
    state: {
      searchType: researchType,
      searchData: researchData,
    },
  });
  window.location.reload();
};

const MainSearchResultContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [researchType, setResearchType] = useState("제목");
  const [researchData, setResearchData] = useState("");
  const navigate = useNavigate();
  const [searchResultData, setSearchResultData] = useState([]);
  dispatch(actionHeader.header("Search"));

  useEffect(() => {
    console.log(
      "location.state.searchType,location.state.searchData : ",
      location.state.searchType,
      location.state.searchData
    );
    getSearchList(
      location.state.searchType,
      location.state.searchData,
      setSearchResultData
    );
  }, []);
  useEffect(() => {
    console.log(searchResultData);
  }, [searchResultData]);
  return (
    <MainSearchResultComponent
      researchType={researchType}
      researchData={researchData}
      setResearchType={setResearchType}
      setResearchData={setResearchData}
      navigateToSearch={navigateToSearch}
      navigate={navigate}
      dispatch={dispatch}
      searchType={location.state.searchType}
      searchData={location.state.searchData}
      searchResultData={searchResultData}
    ></MainSearchResultComponent>
  );
};

export default MainSearchResultContainer;
