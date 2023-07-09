import styled from "styled-components";

export const StyledFooter = styled.footer`
        padding: 2rem 2rem;
        background-color: #F7F7F7;

        .footer{
            color: #22224B;
        }
        .Flex--footer{
            display: flex;
        }
        .footer_links{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 100%;
            text-align: left;
            margin-bottom: 1rem;
        }
        .footer_links_div{
            padding: 1em;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .footer_links_div h4{
            font-size: 14px;
            margin-bottom: 0.6em;
            line-height: 1.5em;
        }
        a{
            color: #22224B;
            line-height: 2em;
        }
        & a:hover{
            text-decoration: underline;
        }

        .social-icons{
            display: flex;
        }
        
        .footer-below{
            display: flex;
            justify-content: space-between;
            margin-top: 0.2rem;
        }
        .footer_below_links{
            display: flex;
        }
        .footer_below_links p{
            font-size: 13px;
            line-height: 1.5em;
            margin-left: 0.5em;
            font-weight: 600;
        }   
        hr{
            color: blue;
        }
        .copy_right p{
            font-size: 13px;
            color: green;
            line-height: 1.5em;
            color: rgba(255,255,255,0.8)
            font-weight: 600;
        }

        @media (max-width: 550px) {
            .footer_links_div{
                margin: .5rem 0;
            }
            .footer-below{
                flex-direction: column;
                justify-content: left;
            }
            .footer_below_links{
                flex-direction: column;
            }
            .footer_below_links p{
                margin: 0;
            } 
        }
   }
   
`