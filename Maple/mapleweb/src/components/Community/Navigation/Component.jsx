import styled from 'styled-components';

const NavigationComponent = ({ category }) => {

    console.log(category);

    return (
        <NavigationWrap>
            {/* 네비바 영역 */}
            <NavigationBox>
                {category.map((item, idx) => {
                    return (
                        // item[0] : 라우터 주소, 버튼 클릭시 해당 라우터로 이동한다.(리액트 라우터)
                        <LiBox>
                            <li key={`category-${item[0][idx]}`}>
                                {item[1]}
                            </li>
                        </LiBox>
                    )
                })}
            </NavigationBox>
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
`;

const NavigationBox = styled.div`
    margin: 0 auto;
    width: 1200px;
    background-color: rgb(245,245,245);
    height: inherit;


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
        margin-right: 45px;
        a{
            color: #666;
            text-decoration: none;
        }
    }
`;