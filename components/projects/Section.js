// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Fade from "../ui/Fade"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

function Section(props) {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    // className={`${loaded} loaded-delay-0`}

    return (
        <Container className={`${loaded} loaded-delay-0`}>
            {props.title && <Fade as={Font.H3}>{props.title}</Fade>}

            {props.children}
        </Container>
    )
}

export default Section
