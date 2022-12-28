import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { action } from "../../modules/header";

const NotFound = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.header("ERROR"));
  }, []);
  return <div>404</div>;
};
export default NotFound;
