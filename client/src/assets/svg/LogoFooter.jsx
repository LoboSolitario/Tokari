import * as React from "react";
import {default as logo} from './tokari-logo/tokari-logo2.svg'

function SvgComponent(props) {
  return (
    <img src={logo} alt="" style={{height: "24px"}} className="filter-logo"/>
  );
}

export default SvgComponent;

