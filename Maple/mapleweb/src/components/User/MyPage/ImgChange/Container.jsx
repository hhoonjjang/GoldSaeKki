import axios from "axios";
import { useSelector } from "react-redux";
import ImgChangeComponent from "./Component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action } from "../../../../modules/onImg";

const ImgChangeContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currUser = useSelector((state) => state.user.currUserName);
  const imgUploadSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.innerText === "취소")
      return navigate("/mypage");
    if (!e.target?.imgselectfile?.files[0]?.name)
      return alert("파일을 선택하세요");
    console.log(e.target.imgselectfile.files[0].name);
    const { imgselectfile } = e.target;
    let formData = new FormData();
    formData.append("selectimg", imgselectfile.files[0]);

    axios
      .post("http://localhost:8080/api/user/imgUpload", formData)
      .then((data) => {
        console.log(data);
        setImgOnclick(e);
      });
    // 대표 이미지 변경에서 이미지 업로드 후 변경버튼 눌렀을때 multer 쪽 upload 경로에 파일 업로드
  };

  const setImgOnclick = (e) => {
    const { imgselectfile } = e.target;
    const currImg = imgselectfile.files[0].name;
    axios
      .post("http://localhost:8080/api/user/imgchange", { currUser, currImg })
      .then((data) => {
        console.log("바뀐이미지 정보 받아온거", data);
        navigate("/mypage");

        dispatch(action.onImg(data.data));
        // 이 주소로 src get통신을 날리는거임 router/index.js 쪽 changeImg함수
      });
  };

  return <ImgChangeComponent imgUploadSubmit={imgUploadSubmit} />;
};
export default ImgChangeContainer;
