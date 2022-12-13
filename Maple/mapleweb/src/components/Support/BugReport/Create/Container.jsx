import { useDispatch } from "react-redux";
import CreateComponent from "./Component";
import { action } from "../../../../modules/support";
import axios from "axios";

const CreateContainer = () => {
  const dispatch = useDispatch();
  const onClick = (reportTitle, reportSelect, imgFile, contentsText) => {
    console.log(imgFile[0]);
    console.log(imgFile);
    let formData = new FormData();
    let img = imgFile[0];
    console.log(img);
    console.log(contentsText);
    if (reportSelect == "program") {
      reportSelect = "불법프로그램 신고";
    } else reportSelect = "버그악용 신고";
    formData.append("reportTitle", reportTitle);
    formData.append("reportSelect", reportSelect);
    formData.append("reportFile", img);

    formData.append("contentsText", contentsText);
    console.log(formData);
    dispatch(
      action.report(reportTitle, reportSelect, imgFile[0].name, contentsText)
    );
    axios.post(
      "http://localhost:8080/api/report/uploadBugReport",

      // formData
      formData
    );
  };
  return <CreateComponent onClick={onClick} />;
};

export default CreateContainer;
