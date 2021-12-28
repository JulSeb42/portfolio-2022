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
    color: ${Variables.Colors.White};
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
        background-color: ${Variables.Colors.White};
        transition: ${Variables.Transitions.Bezier};
    }

    &:hover:after {
        width: 100%;
    }
`

function ButtonNav(props) {
    return (
        <Button as={props.href && Link} href={props.href} {...props}>
            {props.children}
        </Button>
    )
}

export default ButtonNav
