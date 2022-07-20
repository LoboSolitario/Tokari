import * as React from "react";
import {default as logo} from './brands/linkedin-brands.svg'

function SvgComponent(props) {
  return (
    <img src={logo} alt="" style={{height: "25px"}} className="filter-logo"/>
  );
}

export default SvgComponent;