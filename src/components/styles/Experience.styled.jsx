import styled from "styled-components";

export const ExperienceStyled = styled.div` 
    background: linear-gradient(gray, white);       
    gap: 3em;    
    width: 100%;
    padding: 2em;

    h2{
        padding: 1em 0;
        font-size: 25px;
        font-weight: bold;
        text-align: center;
        color: whitesmoke;
    }

    img{
        cursor: pointer;
        transition: transform 0.3s;
    }

    img:hover {
        transform: scale(1.010);
    }
`