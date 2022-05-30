// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"

const Container = styled.a`
    color: ${Variables.Colors.Blue};
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Black};
    position: relative;
    justify-self: start;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        background-color: ${Variables.Colors.Blue};
        height: 2px;
        transition: ${Variables.Transitions.Bezier};
    }

    &:hover:after {
        width: 100%;
    }
`

export { Container }
