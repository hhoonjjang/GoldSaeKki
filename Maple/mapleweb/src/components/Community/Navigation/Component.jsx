import styled from 'styled-components';
// import { Link, Routes, Route } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

// # 네비게이션 컴포넌트 사용을 위해 상위 컴포넌트에서 이처럼 카테고리와  
// 라우터 주소를 작성하고, categorys라는 이름의 props로 보내주면 된다.
// const CATEGORY = [
//     { name: '자유게시판', label: "Free", link: "/Free" },
//     { name: '정보게시판', label: "Information", link: "/Information" },
//     { name: '토론게시판', label: "TopicDiscussion", link: "/TopicDiscussion" },
//     { name: '메이플아트', label: "Art", link: "/Art" },
//     { name: '메이플코디', label: "Coordination", link: "/Coordination" }
// ];
// # 어떤 컴포넌트를 불러올 지는 상위 컴포넌트의 Route를 통해 지정해준다.
// 

const NavigationComponent = ({ categorys }) => {

    const location = useLocation();

    // 주소 이름은 locationName.current를 통해 가져올 수 있다.
    const locationName = useRef("");
    // 현재 몇 번째 카테고리인지 nowRouterIdx.current를 통해 가져올 수 있다.
    const nowRouterIdx = useRef(0);

    // 페이지 리렌더링
    const [_, render] = useState(true);

    // 라우터 주소가 바뀌면 해당 라우터 이름을 반환한다.
    useEffect(() => {

        render(!_);

        const locationArr = location.pathname.split("/");
        locationName.current = locationArr[locationArr.length - 1];

        // 현재 라우터 이름이 카테고리의 몇번째인지 알아낸다.
        // locationName.current
        categorys.map((category, index) => {

            if (category.label === locationName.current) {
                nowRouterIdx.current = index;
            }

        });

    }, [location])


    return (
        <NavigationWrap className='mnb_wrap'>

            <NavigationBox className='div_inner2'>

                {categorys.map((item, idx) => {
                    return (<>
                        <LiBox key={`listbox-${item.label}`}>
                            <Link
                                key={`list-${item.label}`}
                                // to : 해당 카테고리 라우터로 이동한다.
                                to={`./${item.label}`}
                                // className : 내가 선택한 카테고리(라우터에서 가져옴?)랑 같으면 띄우도록 해야한다.
                                className={`${idx === nowRouterIdx.current ? "active" : ""}`}>
                                <CategoryLi key={`category-${item.label}`}>{item.name}</CategoryLi>
                            </Link>

                        </LiBox>
                    </>
                    )
                })}

                <span className='mnb_line'></span>

            </NavigationBox>

            <style jsx>{`
                .mnb_list{
                    width:100%; 
                    float:left; 
                    margin-top:1px;
                }
                .mnb_list li{
                    float:left; 
                    height:64px; 
                    vertical-align: middle; 
                    line-height: 64px; 
                    margin-left:54px; 
                    font-size:16px; 
                    color:#888888;
                    position:relative;
                }
                .mnb_list li:first-child{
                    margin-left:0;
                }
                .mnb_list a{
                    color:#666; 
                    width:100%; 
                    height:100%; 
                    float:left;
                }
                .mnb_list li.active a{
                    color:#333; 
                    font-weight:bold;
                }
                .mnb_line{
                    position:absolute; 
                    left:32px; 
                    bottom:-1px; 
                    height:5px; 
                    background-color:#434343; width:20px;
                }
            `}</style>

            {/* {mnb_setting()} */}
        </NavigationWrap>

    );

};

export default NavigationComponent;

const NavigationWrap = styled.div`
    font-size: 20px;
    height: 64px;
    background-color: white;
    position: sticky;
    top: 62px;
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;

    
    width:100%; 
    float:left; 
`;

const NavigationBox = styled.div`
    margin: 0 auto;
    width: 1200px;
    height: inherit;
    position: relative;
`;

const LiBox = styled.div`
    height: inherit;
    display: inline-block;

    li{
        font-size: 16px;
        list-style: none;
        cursor: pointer;
        height: inherit;
        line-height: 64px;
        text-align: left;
        background-color: white;
        margin-right: 44px;
    }
    a{
        color: #666;
        text-decoration: none;

        // a 호버
        &:hover{
            color: #242424;
        }
        /* a중에서 active인 class를 가진 li */
        &.active li{
            color: black;
            font-weight: 600;
        }

    }
`;

const CategoryLi = styled.li`

`;

