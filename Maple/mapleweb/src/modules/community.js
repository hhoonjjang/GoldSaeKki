// 월드 이미지 import
import world1Img from "../components/Community/images/worlds/icon_1.png";
import world2Img from "../components/Community/images/worlds/icon_2.png";
import world3Img from "../components/Community/images/worlds/icon_3.png";
import world4Img from "../components/Community/images/worlds/icon_4.png";
import world5Img from "../components/Community/images/worlds/icon_5.png";
import world6Img from "../components/Community/images/worlds/icon_6.png";
import world7Img from "../components/Community/images/worlds/icon_7.png";
import world8Img from "../components/Community/images/worlds/icon_8.png";
import world9Img from "../components/Community/images/worlds/icon_9.png";
import world10Img from "../components/Community/images/worlds/icon_10.png";
import world11Img from "../components/Community/images/worlds/icon_11.png";
import world12Img from "../components/Community/images/worlds/icon_12.png";
import world13Img from "../components/Community/images/worlds/icon_13.png";
import world14Img from "../components/Community/images/worlds/icon_14.png";
import world15Img from "../components/Community/images/worlds/icon_15.png";


// 커뮤니티 카테고리 목록
export const CATEGORY = [
    { name: '자유게시판', label: "Free" },
    // { name: '바다이야기', label: "Hi" },
    { name: '정보게시판', label: "Information" },
    // { name: '금쪽이야기', label: "Go" },
    { name: '연재소설', label: "So" },
    { name: '토론게시판', label: "TopicDiscussion" },
    { name: '금쪽이아트', label: "Art" },
];

// 개발용 임시 카테고리
export const CATEGORY2 = [
    { name: '<게시판 목록>', label: "BoardList", link: "/BoardList" },
    { name: '<게시글 등록>', label: "BoardAdd", link: "/BoardAdd" },
    { name: '/게시글 수정', label: "BoardUpdate", link: "/BoardUpdate" },
    { name: '<게시글 상세 페이지>', label: "Board", link: "/Board" },
    { name: '-댓글 목록', label: "CommentList", link: "/CommentList" },
    { name: '-댓글 등록', label: "CommentAdd", link: "/CommentAdd" },
    { name: '/댓글 수정', label: "CommentUpdate", link: "/CommentUpdate" },
    { name: '<페이징 처리>', label: "Pagination", link: "/Pagination" },
];


// 서버(월드) 목록
export const WORLDLIST = [
    { name: '전체월드', img: world1Img },
    { name: '리부트2', img: world2Img },
    { name: '리부트', img: world3Img },
    { name: '오로라', img: world4Img },
    { name: '레드', img: world5Img },
    { name: '이노시스', img: world6Img },
    { name: '유니온', img: world7Img },
    { name: '스카니아', img: world8Img },
    { name: '루나', img: world9Img },
    { name: '제니스', img: world10Img },
    { name: '크로아', img: world11Img },
    { name: '베라', img: world12Img },
    { name: '엘리시움', img: world13Img },
    { name: '아케인', img: world14Img },
    { name: '노바', img: world15Img },
];






const TYPE = {
    LIST: "/community/list",
    BOARD: "/community/board",
}

// 해당 커뮤니티 게시글 목록
const list = (list) => {
    // console.log(list);
    return {
        type: TYPE.LIST,
        payload: { list }
    };
};
// 보드 id에 해당하는 게시글
const board = (board) => {
    // console.log(board);
    return {
        type: TYPE.BOARD,
        payload: { board }
    }
}

export const action = { list, board };

export const initialize = {};

// 리듀서를 만들어준다. 그리고 state 초기값을 설정해준다.
export const reducer = (state = initialize, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPE.LIST:
            return payload;
        case TYPE.BOARD:
            return payload;
        default:
            return state;
    }
}