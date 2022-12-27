import styled from "styled-components";
const MyRequestComponent = ({ requestArr, onClick, isBoolen }) => {
  // const a = tempFun();
  // console.log(a);
  console.log(requestArr);
  return (
    <MyRequestBox>
      <div className="serviceDisplay">
        <div className="category-title">내 문의내역</div>{" "}
        <div>
          최근 6개월 동안 접수하신 1:1문의내역 및 답변 내용을 확인하실 수
          있습니다.
        </div>
      </div>
      <div>
        ※ 문의 내용 중 개인정보가 포함되었거나 중복된 문의인 경우 삭제될 수
        있습니다.
      </div>
      <table>
        <colgroup>
          <col width={"5%"} />
          <col width={"50%"} />
          <col width={"25%"} />
          <col width={"10%"} />
          <col width={"10%"} />
        </colgroup>

        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>분류</th>
            <th>처리상태</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {requestArr.map((item, idx) => (
            <Component
              item={item}
              idx={idx}
              onClick={onClick}
              isBoolen={isBoolen}
              key={`Componet-${idx}`}
            />
            // <>
            //   <tr key={`requestBox-${idx}`} className="requestBox">
            //     <td key={`reportidx-${idx}`}>
            //       <div>{idx + 1}</div>
            //     </td>
            //     <td key={`reportTitle-${idx}`}>
            //       <button
            //         onClick={() => {
            //           onClick(idx);
            //         }}
            //       >
            //         {item.reportTitle}
            //       </button>
            //     </td>
            //     <td key={`reportSelect-${idx}`}>
            //       <div>{item.reportSelect}</div>
            //     </td>
            //     <td key={`reportProcessing-${idx}`}>
            //       <div>
            //         {item.reportProcessing ? item.reportProcessing : "접수중"}
            //       </div>
            //     </td>
            //     <td key={`dateNow-${idx}`}>
            //       <div>{item.updatedAt.split("T")[0]}</div>
            //     </td>
            //   </tr>
            //   <tr>
            //     {isBoolen == idx + 1 ? (
            //       <td
            //         key={`contents-${idx + 1}`}
            //         colSpan={5}
            //         className="contents"
            //         dangerouslySetInnerHTML={{ __html: item.contentsText }}
            //       ></td>
            //     ) : (
            //       // <td>{item.contentsText}</td> react innerhtml
            //       <></>
            //     )}
            //   </tr>
            // </>
          ))}
        </tbody>
      </table>
    </MyRequestBox>
  );
};

export default MyRequestComponent;

const Component = ({ item, idx, onClick, isBoolen }) => {
  return (
    <>
      <tr key={`requestBox-${idx}`} className="requestBox">
        <td key={`reportidx-${idx}`}>
          <div>{idx + 1}</div>
        </td>
        <td key={`reportTitle-${idx}`}>
          <button
            onClick={() => {
              onClick(idx);
            }}
          >
            {item.reportTitle}
          </button>
        </td>
        <td key={`reportSelect-${idx}`}>
          <div>{item.reportSelect}</div>
        </td>
        <td key={`reportProcessing-${idx}`}>
          <div>{item.reportProcessing ? item.reportProcessing : "접수중"}</div>
        </td>
        <td key={`dateNow-${idx}`}>
          <div>{item.createdAt.split("T")[0]}</div>
        </td>
      </tr>
      <tr>
        {isBoolen == idx + 1 ? (
          <td
            key={`contents-${idx + 1}`}
            colSpan={5}
            className="contents"
            dangerouslySetInnerHTML={{ __html: item.contentsText }}
          ></td>
        ) : (
          // <td>{item.contentsText}</td> react innerhtml
          <></>
        )}
      </tr>
      {item.reportProcessing ? (
        <tr>
          {isBoolen == idx + 1 ? (
            <>
              <td key={`Answer-${idx + 1}`} colSpan={4} className="contents">
                <div>{item.reportProcessing ? item.reportAnswer : ""}</div>
              </td>
              <td>
                <div>답변날짜</div>
                {item.updatedAt.split("T")[0]}
              </td>
            </>
          ) : (
            // <td>{item.contentsText}</td> react innerhtml
            <></>
          )}
        </tr>
      ) : (
        <></>
      )}
    </>
  );
};

const MyRequestBox = styled.div`
  table {
    border: solid 1px black;
    width: 100%;
    text-align: center;
    /* border-collapse: collapse; */
  }
  th {
    border-bottom: 1px dashed black;
  }
  td {
    /* width: 100%; */
    border: 1px dashed black;

    /* border-bottom: 1px dashed black; */
    text-align: center;
    & div {
      background-color: lightblue;
      border-radius: 5px;
      width: fit-content;
      margin: auto;
    }
  }
  .serviceDisplay {
    margin-bottom: 30px;
  }
  button {
    background-color: lightblue;
    border: none;
    border-radius: 5px;
  }
  /* .requestBox {
    display: flex;
  } */


`;
