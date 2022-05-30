// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"
import Link from "../../ui/Link"
import Icon from "../../ui/Icon"

const Container = styled(Link)`
    width: 100%;
    height: 20vw;
    max-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${Variables.Colors.White};
    background-color: ${Variables.Colors.DarkBlue};
    text-decoration: none;
    transition: ${Variables.Transitions.Short} !important;
    font-size: ${Variables.FontSizes.Modal};
    gap: ${Variables.Spacers.XXS};

    &:hover {
        background-color: ${Variables.Colors.Blue};
        gap: ${Variables.Spacers.S};

        @media (hover: none) and (pointer: coarse) {
            background-color: ${Variables.Colors.DarkBlue};
            gap: ${Variables.Spacers.XXS};
        }
    }

    @media ${Variables.Breakpoints.Tablet} {
        font-size: 24px;
        height: 200px;
    }
`

export { Container, Icon }
