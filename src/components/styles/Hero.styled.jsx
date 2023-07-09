import styled from "styled-components";

export const HeroStyled = styled.div`
    display: flex;
    padding: 20px;
    background: linear-gradient(135deg, #00feba, #56548a);
    width: 100%;
    width: 100vw;
    margin-top: 70px;

    .content {
        align-self: center;
    }

    & > div{
        flex: 1;
    }
    img{
        align-self: end;
    }

    h1{
        margin-bottom: 16px;
    }

    p{
        margin-top: 0;
        color: #fff;
    }
`