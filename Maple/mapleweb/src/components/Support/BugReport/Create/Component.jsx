import styled from "styled-components";

const CreateComponent = () => {
  return (
    <CreateBox>
      <div>
        <h1>버그악용/불법프로그램 신고</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>신고종류</th>
            <td>
              <select name="" id="">
                <option value="program">불법프로그램 신고</option>
                <option value="bug">버그악용 신고하기</option>
              </select>
            </td>
            <td>
              <input
                type={"text"}
                value=""
                placeholder="35자 이내로 입력해 주세요."
              />
            </td>
          </tr>
          <tr>
            <th>파일첨부</th>
            <td>
              <input />
            </td>
            <td>
              <button>파일첨부</button>
              <span>최대 파일용량:5MByte</span>
            </td>
            <td>{/* <div>최대 파일용량:5MByte</div> */}</td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea></textarea>
            </td>
          </tr>
        </thead>
      </table>
    </CreateBox>
  );
};

export default CreateComponent;

const CreateBox = styled.div`
  width: 1200px;
  margin: auto;
  padding: 10px 30px;
`;
