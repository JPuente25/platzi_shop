import React from "react";
import { ReactComponent as Icon } from "../svg/close.svg";

const CloseIcon = ({width = '20px', height = '20px'}) => <Icon style={{cursor: 'pointer'}} width ={width} height ={height}/>;

export { CloseIcon };