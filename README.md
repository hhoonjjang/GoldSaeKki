# 박혜림 :octocat:
## # 팀 내 역할
1. 네비게이션 컴포넌트
2. 커뮤니티 페이지<br/>
3. database 연결

## # 타임라인
<!-- ### * 스타트
|순번|내용|기간|
|:------:|:---:|:---:|
|1|**회의 및 팀 노션 생성** - https://handsomely-carp-676.notion.site/624ec8c54d584bbf9dad21c5d491e380|2022.12.09.|
|2|**Git Branch 생성 및 깃허브 데스크탑 연결**|2022.12.09.|
|3|**React 폴더 생성 및 기본 설정**|2022.12.09.|
|4|**Node.js express 서버 생성 및 기본 설정**|2022.12.13.| -->
<!-- ### * 작업 -->

|순번|내용|기간|
|:------:|:---:|:---:|
|0|**작업 환경 세팅**|2022.12.09.|
|1|**네비게이션 바 UI 구현 및 라우터 설정**|2022.12.09 ~ 2022.12.11.|
|2|**컴포넌트 구조 생성 및 사이드 바 UI 구현**|2022.12.10.|
|3|**커뮤니티 목록 및 게시글 등록 페이지 UI 구현**|2022.12.12. ~ 2022.12.14.|
|4|**댓글 UI 구현 및 네비게이션 바 수정**|2022.12.15. ~ 2022.12.16.|
|5|**DB 연결관계(User, Board, Comment) 설정 및 게시글 등록 기능 구현**|2022.12.17. ~ 2022.12.18.|
|6|**게시글 상세 페이지 출력 및 게시글 수정, 삭제 기능 구현**|2022.12.19.|
|7|**커뮤니티 전반적 에러 수정 및 댓글 컴포넌트 기능 구현**|2022.12.20.|
|8|**게시글 목록 페이징 처리 및 댓글 수정, 삭제 기능 구현**|2022.12.21. ~ 2022.12.22.|
|9|**커뮤니티 검색 UI 및 필터 기능 구현 및 최종 점검**|2022.12.23. ~ 2022.12.26.|
|10|**커뮤니티 목록/등록/상세 페이지 반응형 및 네비게이션 바 반응형 웹 구현**|2022.12.27.|
|11|**게시글 이슈 태그 목록 출력 및 태그 검색 기능 구현**|2022.12.28.|
|12|**AWS 인스턴스 생성 및 Apache2, React, Node.js, Mysql 연동**|2022.12.29.|
|13|**Notion 정리 및 README.md 파일 수정, 발표를 위한 준비**|2022.12.29.|

## # 구현 사항
## 1. 네비게이션 바 UI 구현 및 라우터 설정
### - 기간 : 2022. 12. 09. ~ 2022. 12. 12.
> ### 핵심 기능
> * animation이 적용된 메뉴바 : 네비게이션 바를 컴포넌트화 하여 랭킹, 커뮤니티, 고객지원 페이지 등 네비게이션 바를 사용하고 싶은 페이지에 이식시켜 사용 가능하게 하였다.
> 　　<img src = "https://cdn.imweb.me/upload/S2020090710444c43a5dc5/7be58594809eb.png">
> 　　<img src = "https://cdn.imweb.me/upload/S2020090710444c43a5dc5/4555c8ecca382.png">
> * 카테고리 이름과 라우터 주소만 설정해 props로 보내주면 카테고리 클릭시 현재 링크의 해당 라우터로 이동 가능하게 구현하였다.
> ```
>    export const CATEGORY = [
>        { name: '자유게시판', label: "Free" },
>        { name: '정보게시판', label: "Information" },
>        { name: '토론게시판', label: "TopicDiscussion" },
>        { name: '연재소설', label: "Novel" },
>        { name: '금쪽이아트', label: "Art" },
>        { name: '이벤트게시판', label: "Event" },
>    ];
> ```

> ### 기타 구현 사항
>* 유저가 마우스를 댄 카테고리 이름의 길이에 맞게 네비게이션 바의 너비가 자동으로 길어지게 하였다.
>* 마우스에 따라 네비게이션 바의 위치가 이동하게 하였다.
> 　　<img style="width : 600px" src = "https://cdn.imweb.me/upload/S2020090710444c43a5dc5/c0a943d178a64.gif">

> ### 이슈 사항 
>1. 카테고리 클릭시 카테고리 엘리먼트의 width를 가져와 
  아래 바의 크기를 변경시켜야 하는데 React의 리랜더링 문제로 width크기가 한번씩 밀려서 
  바로 적용안되는 문제가 생겼다. --> useEffect()를 사용해 state의 값이 변경될 때 리랜더링 되도록 설정해 해결하였다.

<br/>


## 2. 커뮤니티 페이지
### - 기간 : 2022. 12. 09. ~ 2022. 12. 27.
## 
> ### 핵심 기능
>- 변형된 Carousel, Ck-Editor, Pagination
>- moment.js timezone 설정
>- redux를 활용한 태그목록 전환 기능
>- map과 삼항 연산자를 활용한 다소 복잡한 조건부 html 구조 생성

>- 가원이언니 밥 뺏어먹기
>- 가원이언니 밥 뺏어먹기
>- 가원이언니 밥 뺏어먹기
>- 월드별 필터 기능
>* 바나나 사진 올리기
> 　　<img src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/04/19/112966942.2.jpg" alt="바나나 이미지">

> ### 커뮤니티 모든 기능
>- ## # 게시글 목록
>- 게시글 목록 월드 필터 : 현재 카테고리의 해당 월드의 게시글만 출력함
>- 게시글 목록 출력 : 사용자가 선택한 월드, 작성 제목, 유저 월드와 유저 닉네임, 공감수, 시간, 조회수, 댓글 개수를 구현 하였으며 **시간은 오늘 날짜이면 시간, 오늘이 아니라면 날짜를 띄우게 하였음** **댓글 개수는 게시글에 댓글이 있으면 출력하도록 함**, 게시물들은 최근 작성한 것이 위로출력 하였음
>- 게시글 목록 페이징 처리 : Pagination 변형하여 기능 구현
>- 게시글 목록 글작성 버튼 : 글작성 페이지로 이동함(로그인 안되어있으면 못가게 함)

>- ## # 게시글 등록
>- 게시글 등록 월드 : 로그인한 유저의 월드 정보를 가져와 기본으로 선택되게 함
>- 게시글 등록 : ck-editor를 변형해 게시글들을 작성할 수 있게 함(bold, h1설정, 기울임, ul, ol, 링크입력 까지는 가능한데 나머지 오른쪽 기능들은 안됨), 태그달기 가능, 취소하면 기존에 글작성을 시도했던 목록으로 돌아감

>- ## # 게시글 목록
>- 게시글 목록 출력 : 사용자가 선택한 월드, 작성 제목, 유저 월드와 유저 닉네임, 공감수, 시간, 조회수, 댓글 개수를 구현 하였으며 **시간은 오늘 날짜이면 시간, 오늘이 아니라면 날짜를 띄우게 하였음** **댓글 개수는 게시글에 댓글이 있으면 출력하도록 함**
>- 게시글 목록 페이징 처리 : Pagination 변형하여 기능 구현함
>- 게시글 목록 글작성 버튼 : 글작성 페이지로 이동함(로그인 안되어있으면 못가게 함)

>- ## # 게시글 수정/ 삭제
>- 게시글 삭제 가능, 수정시 기존 설정한 데이터들이 들어있고 수정 및 수정취소 가능함

>- ## # 게시글 상세 페이지
>- 게시글 한번들어오면 조회수 1늘어남, 게시글 공감클릭하면 공감수 늘어남
>- 유저가 작성한 게시판/월드 출력됨,    유저이름/조회수/작성시간 출력됨
>- 링크버튼 클릭시 해당 게시글 링크를 ctrl+c로 복사하여 새 창 틀어서 붙여넣으면 해당 게시글로 이동 가능함
>- 유저가 textarea에 작성했던 그대로 게시글이 출력됨
>- 로그인한유저가 게시글작성유저이면 게시글수정/삭제버튼 보이게함
>- 로그인한유저가 댓글작성유저이면 댓글수정/삭제버튼 보이게함
>- 게시글신고버튼 클릭시 신고횟수가 누적됨, 목록버튼 클릭시 전에 보던 목록으로 이동
>- 댓글신고버튼 클릭시 신고횟수가 누적됨



>- Carousel 변형 슬라이드 : 마우스로 끌어 넘기거나 점 클릭해 볼수 있고 1초마다 자동 넘어감
>- 게시글 이슈태그 : 게시글의 공감수 높은 순 정렬해 맨 처음 태그 가져옴, 태그 클릭시 해당 페이지 이동, 이슈태그 내용 작성하고 엔터시 해당 검색 페이지로 이동함
>- heart 버튼 : 클릭시 하트가 터지는 모션을 보여줌


 Ck-Editor, Pagination
>- 가원이언니 밥 뺏어먹기
>- 가원이언니 밥 뺏어먹기
>- 가원이언니 밥 뺏어먹기
>- 가원이언니 밥 뺏어먹기

>### - 이슈 사항 
>* ㅎㅎ 
>* 어머나!
>* 바나나 먹으면 나한테 바나나

