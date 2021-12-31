// Packages
import React from "react"
import styled from "styled-components"
import Link from "../utils/Link"

// Components
import * as Variables from "../styles/Variables"
import Icon from "./Icon"

// Styles
const Button = styled(Link)`
    --size: 48px;
    width: var(--size);
    height: var(--size);
    background-color: ${props => props.color};
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

export const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }

    @media ${Variables.Breakpoints.Mobile} {
        display: grid;
        grid-template-columns: repeat(4, 48px);
        gap: ${Variables.Margins.S};
    }
`

function ButtonSocial(props) {
    return (
        <Button
            href={props.social.url}
            target="_blank"
            rel="noreferrer noopener"
            color={props.social.color}
        >
            <Icon
                name={props.social.name}
                size={32}
                color={Variables.Colors.White}
            />
        </Button>
    )
}

export default ButtonSocial
