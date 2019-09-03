import styled from 'styled-components';

export const StyledElementContent = styled.div`
padding:5px;
border:1px solid black;
border-radius:4px;
width: 100px;
margin-top:3px;
margin-bottom:3px;
margin-left:${({depth}) => depth > 0 ? depth * 50 : 5}px;
text-align:center;

cursor:pointer;

&:hover{
    font-weight:bold;
    background:lightgrey;
}
`;