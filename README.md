# 박혜림
|순번|내용|기간|
|:------:|:---:|:---:|
|TEAM|**Git Branch 생성 및 깃허브 데스크탑 연결**|2022.12.09.|
|TEAM|**Node.js express 서버 세팅**|2022.12.09.|
|TEAM|**React 폴더 생성 및 기본 설정**|2022.12.09.|
|TEAM|**팀 노션 생성 - https://www.notion.so/624ec8c54d584bbf9dad21c5d491e380**|2022.12.09.|
|1|**네비게이션 바 UI 및 라우터 설정**|2022.12.09 ~ 2022.12.10.|
|2|**커뮤니티 목록, 상세 페이지 Component 생성 및 UI 구현**|2022.12.11. ~ 2022.12.14.|
|3|**Database 연결관계 설정 및 게시글 입력 구현**|2022.12.15.|
|4|**반응형 웹 구현**|2022.12.26. ~ 2022.12.27.|

## 1. 네비게이션 바
### - 기간 : 2022. 12. 09. ~ 2022. 12. 12.
> ### 핵심 기능
* 네비게이션 바를 컴포넌트화 하여 랭킹, 커뮤니티, 고객지원 페이지 등 네비게이션 바를 사용하고 싶은 페이지에 이식시켜 사용 가능하게 하였다.
<img src = "https://cdn.imweb.me/upload/S2020090710444c43a5dc5/264491c07402a.png">
<img src = "https://cdn.imweb.me/upload/S2020090710444c43a5dc5/7be58594809eb.png">
<img src = "https://cdn.imweb.me/upload/S2020090710444c43a5dc5/4555c8ecca382.png">

* 카테고리 이름과 라우터 주소만 설정해 props로 보내주면 카테고리 클릭시 현재 링크의 해당 라우터로 이동 가능하게 구현하였다.
```
    export const CATEGORY = [
        { name: '자유게시판', label: "Free" },
        { name: '정보게시판', label: "Information" },
        { name: '토론게시판', label: "TopicDiscussion" },
        { name: '연재소설', label: "Novel" },
        { name: '금쪽이아트', label: "Art" },
        { name: '이벤트게시판', label: "Event" },
    ];
```

> ### 구현 사항
* 유저가 마우스를 댄 카테고리 이름의 길이에 맞게 네비게이션 바의 너비가 자동으로 길어지게 하였다.
* 마우스에 따라 네비게이션 바의 위치가 이동하게 하였다.
<img style="width : 600px" src = "https://cdn.imweb.me/upload/S2020090710444c43a5dc5/c0a943d178a64.gif">

> ### 이슈 사항 
* 귀여워야 하는데 그렇지 못함 -> 내가귀여워서 해결됨 :smile:


<img src = "https://artyandbanana.com/wp-content/uploads/2022/10/%EB%B0%94%EB%82%98%EB%82%98-%EC%9E%89%EA%B8%80%EB%A6%AC%EC%89%AC-%EB%A1%9C%EA%B3%A0-2-1.jpg"><br><br>
```
let code = "하이";
```


## 2. 커뮤니티 페이지
### - 기간 : 2022. 12. 09. ~ 2022. 12. 27.
### - 작성자 : 박혜림
## 
### - 구현 사항
- 가원이언니 밥 뺏어먹기
* 바나나 사진 올리기
### - 이슈 사항 
* ㅎㅎ 
* 어머나!
* 바나나 먹으면 나한테 바나나

<img src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/04/19/112966942.2.jpg" alt="바나나 이미지">

