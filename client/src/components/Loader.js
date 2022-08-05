/* eslint-disable no-unused-vars */

import React from "react";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
function Loader() {
  
 
  return (
    <div className="sweet-loading text-center d-flex align-items-center justify-content-center my-4" style={{marginTop:'50px'}}>
    <HashLoader color={'#256395'} loading={true} css='' size={80} />
  </div>
  );
}

export default Loader;
