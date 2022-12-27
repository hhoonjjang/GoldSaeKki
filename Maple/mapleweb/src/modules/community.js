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
import world16Img from "../components/Community/images/worlds/icon_16.png";


// 커뮤니티 카테고리 목록
export const CATEGORY = [
    { name: '자유게시판', label: "Free" },
    // { name: '바다이야기', label: "Hi" },
    { name: '정보게시판', label: "Information" },
    { name: '토론게시판', label: "TopicDiscussion" },
    { name: '연재소설', label: "Novel" },
    { name: '금쪽이아트', label: "Art" },
    { name: '이벤트게시판', label: "Event" },
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
    { name: '전체월드', img: world1Img, label : "All" },
    { name: '리부트2', img: world2Img, label : "Reboot2" },
    { name: '리부트', img: world3Img, label : "Reboot" },
    { name: '오로라', img: world4Img, label : "Aurora" },
    { name: '레드', img: world5Img, label : "Red" },
    { name: '이노시스', img: world6Img, label : "Innosis" },
    { name: '유니온', img: world7Img, label : "Union" },
    { name: '스카니아', img: world8Img, label : "Scania" },
    { name: '루나', img: world9Img, label : "Luna" },
    { name: '제니스', img: world10Img, label : "Zenith" },
    { name: '크로아', img: world11Img, label : "Croix" },
    { name: '베라', img: world12Img, label : "Vera" },
    { name: '엘리시움', img: world13Img, label : "Elysium" },
    { name: '아케인', img: world14Img, label : "Arcane" },
    { name: '노바', img: world15Img, label : "Nova" },
    { name: '버닝', img: world16Img, label : "Burning" },
    { name: '버닝2', img: world16Img, label : "Burning2" },
    { name: '버닝3', img: world16Img, label : "Burning3" },
    { name: '버닝4', img: world16Img, label : "Burning4" },
];






const TYPE = {
    TAGS : "community/tags",
    LIST: "/community/list",
    BOARD: "/community/board",
    COMMENTS: "/community/comments",
    COMMENTCOUNTS : "/community/commentCounts",
}

// 커뮤니티 이슈 태그 목록
const tags = (tags) =>{
    return {
        type : TYPE.TAGS,
        payload : { tags }
    }
}
// 해당 커뮤니티 게시글 목록
const list = (list) => {
    // console.log(list);
    return {
        type: TYPE.LIST,
        payload: { list }
    };
};
// 보드 id에 해당하는 게시글과 댓글 목록
const board = (board) => {
    // console.log(board);
    return {
        type: TYPE.BOARD,
        payload: { board }
    }
}
// 보드 id에 해당하는 댓글 목록
const comments = (comments) => {
    // console.log(comments);
    return {
        type: TYPE.COMMENTS,
        payload: { comments }
    }
}

// 게시글의 댓글 개수 배열
const commentCounts = (counts) =>{
    // console.log(counts);
    return{
        type : TYPE.COMMENTCOUNTS,
        payload : {counts}
    }
}

export const action = { tags, list, board, comments, commentCounts };

export const initialize = {};

// 리듀서를 만들어준다. 그리고 state 초기값을 설정해준다.
export const reducer = (state = initialize, action) => {
    const { type, payload } = action;
    switch (type) {
        case TYPE.TAGS:
            const { tags } = payload;
            return {...state, tags};
        case TYPE.LIST:
            // return payload;
            const { list } = payload;
            return {...state, list};
        case TYPE.BOARD:
            const { board } = payload;
            return {...state, board};
        case TYPE.COMMENTS:
            const { comments } = payload;
            return {...state, comments};
        case TYPE.COMMENTCOUNTS :
            const { commentCounts } = payload;
            return{...state , commentCounts};
        default:
            return state;
    }
}