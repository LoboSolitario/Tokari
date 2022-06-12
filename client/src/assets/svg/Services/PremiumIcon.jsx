import * as React from "react";
import {default as logo} from './services-icons/premium-icon.svg'

function SvgComponent(props) {
  return (
    <img src={logo} alt="" style={{height: "50px"}}/>
  );
}

export default SvgComponent;
