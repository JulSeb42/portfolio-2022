// Packages
import React, { useEffect, useState } from "react"
import styled from "styled-components"

// Components
import Link from "../utils/Link"
import ButtonNav from "../ui/ButtonNav"
import About from "./About"
import Contact from "./Contact"
import * as Variables from "../styles/Variables"

// Data
import SiteData from "../data/SiteData"

// Styles
const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: ${props => props.topPosition};
    left: 0;
    padding: ${Variables.Margins.M} 5vw;
    z-index: 997;
    transition: ${Variables.Transitions.Bezier};
`

const Logo = styled(Link)`
    color: ${Variables.Colors.Font};
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Bold};
    display: grid;
    grid-template-columns: 1fr;
    font-size: ${Variables.FontSizes.Nav};
`

const Subtitle = styled.span`
    font-weight: ${Variables.FontWeights.Regular};
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    & > a,
    & > button:not(:last-child) {
        margin-right: ${Variables.Margins.M};

        @media ${Variables.Breakpoints.Mobile} {
            margin-right: 0;
            margin-bottom: ${Variables.Margins.M};
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: fixed;
        top: 0;
        left: -100%;
        width: 100vw;
        height: 100vh;
        background-color: ${Variables.Colors.Background};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: ${Variables.Transitions.Long};
        transition-timing-function: ${Variables.Transitions.Bezier};

        .ButtonDelay1,
        .ButtonDelay2,
        .ButtonDelay3 {
            opacity: 0;
            transform: translateX(-${Variables.Margins.XS});
            transition: ${Variables.Transitions.Short};
        }

        &.Open {
            left: 0;

            .ButtonDelay1,
            .ButtonDelay2,
            .ButtonDelay3 {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
`

const Burger = styled.button`
    width: 30px;
    height: 20px;
    position: relative;
    cursor: pointer;
    z-index: 998;
    display: none;
    background: none;
    border: none;
    padding: 0;

    span {
        width: 100%;
        height: 2px;
        background-color: ${Variables.Colors.Font};
        border-radius: ${Variables.Radiuses.Round};
        position: absolute;
        left: 0;
        transition: ${Variables.Transitions.Short};

        &:first-child {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - 2px / 2);
        }

        &:last-child {
            bottom: 0;
        }
    }

    &.Open span {
        &:first-child {
            transform: rotate(45deg);
            top: 9px;
        }

        &:nth-child(2) {
            width: 0;
        }

        &:last-child {
            transform: rotate(-45deg);
            bottom: 9px;
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        display: block;
    }
`

function Header() {
    const [topPosition, setTopPosition] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 400) {
                setTopPosition("-150px")
            } else {
                setTopPosition(0)
            }
        })
    })

    const [isOpen, setIsOpen] = useState(false)
    const Open = isOpen ? "Open" : ""
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)
    const BurgerOpen = isBurgerOpen ? "Open" : ""

    const handleBurger = () => {
        setIsOpen(!isOpen)
        setIsBurgerOpen(!isBurgerOpen)
    }

    useEffect(() => {
        isOpen
            ? document.body.classList.add("stop-scrolling")
            : document.body.classList.remove("stop-scrolling")
    })

    return (
        <Container topPosition={topPosition}>
            <Logo href="/">
                {SiteData.Author}
                <Subtitle>{SiteData.Subtitle}</Subtitle>
            </Logo>

            <Burger
                aria-label="Menu button"
                className={BurgerOpen}
                onClick={handleBurger}
                id="burger"
            >
                <span />
                <span />
                <span />
            </Burger>

            <Nav className={Open}>
                <ButtonNav href="/" id="1">
                    Home
                </ButtonNav>
                <About />
                <Contact />
            </Nav>
        </Container>
    )
}

export default Header
