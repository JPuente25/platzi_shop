import React from "react";
import { ReactComponent as Icon } from "../svg/menu.svg";

const MenuIcon = ({width = '60px', height = '60px'}) => <Icon style={{cursor: 'pointer'}} width ={width} height ={height}/>;

export { MenuIcon };