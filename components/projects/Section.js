// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

function Section(props) {
    return (
        <Container>
            {props.title && <Font.H3>{props.title}</Font.H3>}

            {props.children}
        </Container>
    )
}

export default Section
