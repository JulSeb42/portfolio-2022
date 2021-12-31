// Packages
import React, { useState } from "react"
import styled from "styled-components"
import Link from "../utils/Link"

// Components
import * as Variables from "../styles/Variables"
import Icon from "../ui/Icon"
import UiTexts from "../data/UITexts"
import Fade from "../ui/Fade"

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
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    return (
        <Fade>
            <Container
                href={`/projects/${props.href}`}
                className={`${loaded} loaded-delay-0`}
            >
                <Text>{UiTexts.NextProject}</Text>

                <Icon
                    name="arrow-right"
                    color={Variables.Colors.White}
                    size={24}
                    className="icon"
                />
            </Container>
        </Fade>
    )
}

export default Next
