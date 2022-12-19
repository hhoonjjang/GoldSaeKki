import styled from "styled-components";
const AdminListComponet = ({ listArr, onClick }) => {
  console.log(listArr);
  return (
    <AdminListBox>
      <div>관리자리스트</div>
      <table>
        <colgroup>
          <col width={"30%"} />
          <col width={"50%"} />
          <col width={"20%"} />
        </colgroup>
        <thead>
          <tr>
            <th>번호</th>
            <th>관리자이름</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          {listArr.map((item, idx) => (
            <tr key={`listbox-${idx}`}>
              {item.adminName == "정재훈" ? (
                <></>
              ) : (
                <>
                  <td key={`adminIdx-${idx}`}>{idx}</td>
                  <td key={`adminName-${idx}`}>{item.adminName}</td>
                  <td key={`adminDate-${idx}`}>
                    {item.createdAt.split("T")[0]}
                  </td>
                  <td key={`adminBtn-${idx}`}>
                    <button
                      onClick={() => {
                        onClick(item.id);
                      }}
                    >
                      삭제
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </AdminListBox>
  );
};

export default AdminListComponet;

const AdminListBox = styled.div``;
