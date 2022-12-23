import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { action } from "../../../modules/header";

import MainSearchResultComponent from "./MainSearchResultComponent";

const getSearchList = async (searchType, searchData, setSearchResultData) => {
  console.log("searchType : ", searchType);
  console.log("searchData : ", searchData);

  const data = await axios.post("http://localhost:8080/api/search/mainSearch", {
    searchType: searchType,
    searchData: searchData,
  });
  console.log(data);
  console.log(data?.data?.searchResult);
  setSearchResultData(data?.data?.searchResult[0]);
};

const MainSearchResultContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchResultData, setSearchResultData] = useState({});
  dispatch(action.header("Search"));

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
      searchType={location.state.searchType}
      searchData={location.state.searchData}
      searchResultData={searchResultData}
    ></MainSearchResultComponent>
  );
};

export default MainSearchResultContainer;
