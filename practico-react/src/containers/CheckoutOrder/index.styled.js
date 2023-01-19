import styled from "styled-components";
import { text_input_field, very_light_pink } from "../../styles/GlobalStyle";

export const TotalBox = styled.div`
   display: flex;
   background-color: ${text_input_field};
   height: 50px;
   width: 100%;
   border-radius: 8px;
   font-size: var(--md);
   font-weight: bold;
   display: flex;
   justify-content: space-between;
   padding: 0 24px;
`;

export const TitleContainer = styled.div`
   display: flex;
   width: 100%;
   justify-content: left;
   align-items: center;
   gap: 24px;
   height: auto;
`;

