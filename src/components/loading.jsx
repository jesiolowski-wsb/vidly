import React from "react";
import { Seek } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <Seek
        className="d-flex justify-content-center"
        color="#007bff"
        size="small"
      />
    </div>
  );
};

export default Loading;
