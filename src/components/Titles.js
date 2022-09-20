import styled from "styled-components"

const  Title  = styled.h1`
 color: ${props => props.primary ? "palevioletred" : "black"};
`;

const  Title2  = styled.h1`
 color: ${props => props.primary ? "red" : "black"};
 font-size: large;
`;

export  {Title, Title2};