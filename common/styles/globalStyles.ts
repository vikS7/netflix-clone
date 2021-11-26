import styled, { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    
    html {
        overflow: scroll;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        width: 0;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    ::-webkit-scrollbar-thumb {
        background: #FF0000;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${p => p.theme.gray50};
        color: ${p => p.theme.gray900};
    }
    
    .no-scroll {
      overflow: hidden;
    }
`;

export const Button = styled.button<{$secondary?: boolean}>`
    padding: 0.8rem;
    min-width: 7rem;
    margin-right: 1rem;
    border-radius: 0.4rem;
    border: none;
    z-index: 1;
    background-color: ${p => (p.$secondary ? 'rgba(77, 76, 76, 0.79);' : p.theme.white)}
    color: ${p => (p.$secondary ? p.theme.white : p.theme.gray50)};
    transition: all 0.1s ease-in;

    &:hover{
        opacity: ${p => (p.$secondary ? '0.6' : '0.9')};
    }
`;

export const IconContainer = styled.div`
    height: 1rem;
    width: 1rem;
`;

export const CardBackground = styled.div`
    height: 100%;
    transition: all 0.2s ease-in;
`;

export const CardContent = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    opacity: 0;
    font-family: 'Outfit';
    transition: all 0.3s ease-in;
`;

export const CardTitle = styled.div`
    font-weight: 500;
    font-size: 1rem;
`;

export const CardOverview = styled.div`
    font-size: 0.9rem;
`;

export const CardWrapper= styled.div`
    height: 17rem;
    position: relative;
    min-width: 8rem;
    max-width: 12rem;
    transition: transform ease-in 0.2s;
    &:hover{
        ${CardBackground}{
            opacity: 0.2;
        }

        ${CardContent}{
            opacity: 1;
        }
        transform: translate3d(0, -0.5rem, 0);
    }

    @media( min-width: 980){
        width: 5rem;
        border: 1px solid white;
    }
`;