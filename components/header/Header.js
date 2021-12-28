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
    color: ${Variables.Colors.White};
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

    a,
    button:not(:last-child) {
        margin-right: ${Variables.Margins.M};
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

    return (
        <Container topPosition={topPosition}>
            <Logo href="/">
                {SiteData.Author}
                <Subtitle>{SiteData.Subtitle}</Subtitle>
            </Logo>

            <Nav>
                <ButtonNav href="/">Home</ButtonNav>
                <About />
                <Contact />
            </Nav>
        </Container>
    )
}

export default Header
