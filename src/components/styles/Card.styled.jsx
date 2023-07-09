import styled from "styled-components";

export const CardStyled = styled.div`
    width: 185px;
    font-size: 12px;
    position: relative;

    .card--badge{
        position: relative;
    }
    .card--badge h5{
        position: absolute;
        top: 6px;
        left: 6px;
        background-color: white;
        padding: 5px 7px;
        border-radius: 2px;
        font-weight: bold;
    }

    img {
        width: 100%;
        border-radius: 9px;
    }

    & div {
        display: flex;
        align-items: center;
    }

    & div img{
        width: 15px;
        height: 14px;
    }

    & div span{
        color: grey;
    }

    p > span{
        font-weight: bold;
    }
    
`