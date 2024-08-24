import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";
function Loading() {
  return (
    <div className="center">
      <div className="visually-hidden">Loading ... Please Wait</div>
      <br />
      <Spinner animation="border" role="status" className="spinner"></Spinner>
    </div>
  );
}

export default Loading;
