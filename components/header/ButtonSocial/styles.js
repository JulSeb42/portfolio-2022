// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"

const size = 48

const Container = styled.a`
    width: ${size}px;
    height: ${size}px;
    background-color: ${({ color }) => color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Variables.Radiuses.M};
    transition: ${Variables.Transitions.Short};

    &:hover {
        box-shadow: ${Variables.Shadows.Button};
        transform: scale(1.01) translateY(-2px);
    }

    @media (hover: none) and (pointer: coarse) {
        &:hover {
            box-shadow: none;
            transform: scale(1) translateY(0);
        }
    }
`

export { Container }
