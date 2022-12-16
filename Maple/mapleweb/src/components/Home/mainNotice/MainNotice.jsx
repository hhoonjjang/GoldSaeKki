import styled from "styled-components";

const MainNotice = () => {
  return (
    <MainNoticeComponent>
      <div className="mainNotice_innerBox_rows">
        <div className="mainNotice_innerBox_column">
          <div className="mainNotice_innerBox_column_top"></div>
          <div className="mainNotice_innerBox_column_bottom">
            <div></div>
          </div>
        </div>
      </div>
    </MainNoticeComponent>
  );
};
export default MainNotice;

const MainNoticeComponent = styled.div`
  background-color: #eeeeee;
  height: 554px;
  display: flex;
  justify-content: center;

  .mainNotice_innerBox {
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
