import styled from "styled-components";

const MessageComponent = ({ msgArr }) => {
  return (
    <MessageBox>
      <div className="category-title">내 메세지함</div>
      <table>
        <colgroup>
          <col width={"15%"} />
          <col width={"50%"} />
          <col width={"15%"} />
        </colgroup>

        <thead>
          <tr>
            <th>#</th>
            <th>내용</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {msgArr.map((item, idx) => (
            <tr>
              <td key={`msgBoxIdx-${idx}`}>{idx + 1}</td>
              <td key={`msgBoxContents-${idx}`}>
                <pre>{item.text}</pre>
              </td>
              <td key={`msgBoxDate-${idx}`}>{item.createdAt.split("T")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </MessageBox>
  );
};

export default MessageComponent;

const MessageBox = styled.div`
  table {
    width: 80%;
    text-align: center;
  }
  tr:first-child {
    border-top: none;
  }
  th {
    border: 1px solid black;
  }
  td {
    border: 1px dashed gray;
  }
  pre {
    margin: 10px 0px;
  }
`;
