// Packages
import React from "react"
import styled from "styled-components"
import Link from "../utils/Link"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"
import UiTexts from "../data/UITexts"

// Styles
const Container = styled(Link)`
    width: 100%;
    height: 20vw;
    max-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    color: ${Variables.Colors.White};
    background-color: ${Variables.Colors.DarkBlue};
    backdrop-filter: blur(20px);
    text-decoration: none;
    font-size: ${Variables.FontSizes.Modal};
    transition: ${Variables.Transitions.Short};

    .icon {
        margin-left: ${Variables.Margins.XXS};
        transition: ${Variables.Transitions.Short};
    }

    &:hover {
        background-color: ${Variables.Colors.Blue};

        .icon {
            margin-left: ${Variables.Margins.XS};
        }
    }

    @media ${Variables.Breakpoints.Tablet} {
        font-size: 24px;
        height: 200px;
    }

    @media (hover: none) and (pointer: coarse) {
        &:hover {
            background-color: ${Variables.Colors.DarkBlue};

            .icon {
                margin-left: ${Variables.Margins.XXS};
            }
        }
    }
`

const Text = styled.span``

function Next(props) {
    return (
        <Container href={`/projects/${props.href}`}>
            <Text>{UiTexts.NextProject}</Text>
            
            <Icon name="arrow-right" color={Variables.Colors.White} size={24} className="icon" />
        </Container>
    )
}

export default Next
