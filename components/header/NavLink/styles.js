// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"

const Container = styled.button`
    font-size: ${Variables.FontSizes.Nav};
    border: none;
    background: none;
    color: ${Variables.Colors.Font};
    text-decoration: none;
    padding: 0;
    position: relative;
    line-height: ${Variables.FontSizes.Nav};
    justify-self: start;

    &:after {
        content: "";
        width: 0;
        height: 1px;
        position: absolute;
        bottom: -2px;
        left: 0;
        background-color: ${Variables.Colors.Font};
        transition: ${Variables.Transitions.Bezier};
    }

    &:hover:after {
        width: 100%;
    }

    @media (hover: none) and (pointer: coarse) and (max-width: 600px) {
        &:hover {
            background-color: transparent;
            backdrop-filter: blur(0);
            border-color: transparent;
            box-shadow: none;
        }

        &:hover:after {
            width: 0;
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        font-size: 32px;
        text-align: center;
        line-height: ${Variables.LineHeight};

        &.button-delay-1 {
            transition-delay: 0.6s !important;
        }

        &.button-delay-2 {
            transition-delay: 0.8s !important;
        }

        &.button-delay-3 {
            transition-delay: 1s !important;
        }
    }
`

export { Container }
