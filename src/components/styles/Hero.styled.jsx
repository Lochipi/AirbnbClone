import styled from "styled-components";

export const HeroStyled = styled.div`
    display: flex;
    padding: 0 5em;
    background: linear-gradient(135deg, #00feba, #56548a);
    width: 100%;
    margin-top: 70px;

    .content {
        align-self: center;
    }

    & > div{
        flex: 1;
    }
    img{
        align-self: end;
        padding: 3em;
    }

    h1{
        margin-bottom: 16px;
    }

    p{
        margin-top: 0;
        color: #fff;
    }

    @media (min-width: 769px) and (max-width: 1023px) {
        .content h1{
            margin-top: 1rem;
            font-size: 2rem;
        }

        .content p{
            font-size: 0.7rem;
            line-height: 1.5;
        }

        & div img {
            max-width: 600px;
        }
      }

    @media (max-width: 768px) {
        .content h1{
            margin-top: 1rem;
            font-size: 1.5rem;
        }

        .content p{
            font-size: 0.7rem;
            line-height: 1.5;
        }

        & div img {
            width: 600px;
        }
    }
`