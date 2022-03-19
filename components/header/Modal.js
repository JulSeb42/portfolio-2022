// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// Components
import ButtonNav from "../ui/ButtonNav"
import Icon from "../ui/Icon"
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    position: fixed;
    top: 50vh;
    left: 50vw;
    width: 0;
    height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: ${Variables.Colors.White20};
    ${Variables.Effects.Blur};
    z-index: 999;
    transition: ${Variables.Transitions.Long};
    transition-delay: 0.5s;

    .delay-1,
    .delay-2,
    .delay-3,
    .content,
    .close {
        transform: translateX(-${Variables.Margins.S});
        opacity: 0;
        transition: ${Variables.Transitions.Long};
        transition-delay: 0s;
    }

    &.open {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition-delay: 0s;

        .content,
        .close {
            transform: translateY(0);
            opacity: 1;
        }

        .content {
            transition-delay: 0.6s;
        }

        .close {
            transition-delay: 0.8s;
        }

        .delay-1,
        .delay-2,
        .delay-3 {
            transform: translateY(0);
            opacity: 1;
            transition-delay: 0.8s;
        }

        .delay-2 {
            transition-delay: 1s;
        }

        .delay-3 {
            transition-delay: 1.2s;
        }
    }
`

const Button = styled.button`
    position: absolute;
    right: 5vw;
    top: ${Variables.Margins.M};
    border: none;
    background: none;
    padding: 0;
`

const Content = styled.div`
    width: 60%;
    background-color: ${Variables.Colors.White70};
    ${Variables.Effects.Blur};
    color: ${Variables.Colors.Black};
    padding: ${Variables.Margins.L};
    font-size: ${Variables.FontSizes.Modal};
    border: 1px solid ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.L};
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.M};
    box-shadow: ${Variables.Shadows.Modal};

    @media ${Variables.Breakpoints.Tablet} {
        width: 90%;
    }

    @media ${Variables.Breakpoints.Mobile} {
        max-height: 80vh;
        overflow-y: scroll;
    }
`

function Modal(props) {
    const [isOpen, setIsOpen] = useState(false)
    const open = isOpen ? "open" : ""

    useEffect(() => {
        isOpen
            ? document.body.classList.add("stop-scrolling")
            : document.body.classList.remove("stop-scrolling")

        isOpen
            ? document.querySelector("#burger").classList.add("hidden")
            : document.querySelector("#burger").classList.remove("hidden")
    })

    return (
        <>
            <ButtonNav
                onClick={() => setIsOpen(!isOpen)}
                id={props.title === "About" ? 2 : 3}
            >
                {props.title}
            </ButtonNav>

            <Container className={open}>
                <Button
                    aria-label="Close Modal"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Icon
                        name="close"
                        size={48}
                        color={Variables.Colors.Font}
                        className="close"
                    />
                </Button>

                <Content className="content">{props.children}</Content>
            </Container>
        </>
    )
}

export default Modal
