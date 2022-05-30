// Imports
import { useState, useEffect } from "react"

import NavLink from "../NavLink"
import About from "../About"
import Contact from "../Contact"

import { Container, Logo, Burger, Nav } from "./styles"

import siteData from "../../../data/site-data"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 400) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
    })

    return (
        <Container isScrolled={isScrolled}>
            <Logo href="/">
                {siteData.author}
                <span>{siteData.subtitle}</span>
            </Logo>

            <Burger
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                id="burger"
                aria-label={`${isOpen ? "Close" : "Open"} menu`}
            >
                <span></span>
                <span></span>
                <span></span>
            </Burger>

            <Nav isOpen={isOpen}>
                <NavLink href="/" id={1}>Home</NavLink>
                <About />
                <Contact />
            </Nav>
        </Container>
    )
}

export default Header
