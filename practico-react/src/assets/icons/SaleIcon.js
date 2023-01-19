import React from "react";
import { ReactComponent as Icon } from "../svg/sale.svg";

const SaleIcon = ({width = '60px', height = '60px'}) => <Icon style={{cursor: 'pointer'}} width ={width} height ={height}/>;

export { SaleIcon };