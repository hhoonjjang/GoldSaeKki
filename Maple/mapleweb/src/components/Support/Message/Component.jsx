import styled from "styled-components";

const MessageComponent = ({ msgArr }) => {
  return (
    <MessageBox>
      <div>메세지컴포넌트</div>
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
              <td key={`msgBoxContents-${idx}`}>{item.text}</td>
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
`;
