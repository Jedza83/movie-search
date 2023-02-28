import React from "react";
import Spinner from "../assets/images/spinner.svg";
const Loading = () => {
  return (
    <div>
      <img src={Spinner} alt="Spinner" className="spinner" />
    </div>
  );
};
export default Loading;
