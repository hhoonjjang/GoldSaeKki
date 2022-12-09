import styled from "styled-components";
import "../CSS/footer.css";
const Footer = () => {
  return (
    <FooterComponent>
      <div className="footer_innerBox">
        <div>
          <ul>
            <li>
              {/* 메이플스토리 사이트 내에서 움직이는 것이 아니기에 a 태그를 붙였음 */}
              <a href="#">회사소개</a>
            </li>
            <li>
              <a href="#">채용안내</a>
            </li>
            <li>
              <a href="#">이용약관</a>
            </li>
            <li>
              <a href="#">게임이용등급안내</a>
            </li>
            <li>
              <a href="#">
                <span className="footer_privacyPolicy">개인정보처리방침</span>
              </a>
            </li>
            <li>
              <a href="#">청소년보호정책</a>
            </li>
            <li>
              <a href="#">운영정책</a>
            </li>
            <li>
              <a href="#">넥슨PC방</a>
            </li>
            <li>
              <a href="#">사이트맵</a>
            </li>
          </ul>
          <div className="footer_normalText">
            (주)넥슨코리아 대표이사 이정헌 경기도 성남시 분당구판교로 256번길 7
            전화: 1588-7701 팩스:0502-258-8322
            <br /> E-mail:contact-us@nexon.co.kr 사업자등록번호 : 220-87-17483호
            통신판매업 신고번호 : 제2013-경기성남-1659호 사업자정보확인 <br />ⓒ
            <span>NEXON Korea Corporation All Rights Reserved.</span>
          </div>
        </div>
        <div className="footer_familySite">
          <div className="footer_familySite_title">Family Site</div>
          <div className="footer_familySite_items">
            <div className="footer_familySite_item_1">
              <span>Global</span>
              <span>Japan</span>
              <span>China</span>
              <span>Taiwan</span>
            </div>
            <div className="footer_familySite_item_2">
              <span>S.E.A</span>
              <span>North America</span>
              <span>Thailand</span>
            </div>
            <div className="footer_familySite_item_3">
              <span>Maple Tester</span>
            </div>
          </div>
        </div>
      </div>
    </FooterComponent>
  );
};

export default Footer;

const FooterComponent = styled.div`
  display: flex;
  justify-content: center;
  background-color: #2f3238;
  width: 100%;
  height: 220px;
  position: absolute;
  bottom: 0;
  left: 0;
`;
