// Packages
import React from "react"
import styled from "styled-components"

// Components
import Link from "../utils/Link"
import * as Variables from "../styles/Variables"

// Styles
const Button = styled.button`
    font-size: ${Variables.FontSizes.Nav};
    border: none;
    background: none;
    color: ${Variables.Colors.Font};
    text-decoration: none;
    padding: 0;
    position: relative;
    line-height: ${Variables.LineHeight};

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

    @media (hover: none) and (pointer: coarse) {
        &:hover {
            background-color: transparent;
            backdrop-filter: blur(0);
            border-color: transparent;
            box-shadow: none;
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        font-size: 32px;
        width: 70%;
        text-align: center;

        &.ButtonDelay1 {
            transition-delay: 0.6s !important;
        }

        &.ButtonDelay2 {
            transition-delay: 0.8s !important;
        }

        &.ButtonDelay3 {
            transition-delay: 1s !important;
        }
    }
`

function ButtonNav(props) {
    return (
        <Button
            as={props.href && Link}
            href={props.href}
            className={`ButtonDelay${props.id}`}
            {...props}
        >
            {props.children}
        </Button>
    )
}

export default ButtonNav
