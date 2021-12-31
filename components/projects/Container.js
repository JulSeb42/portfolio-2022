// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Wrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    background-color: ${Variables.Colors.Background};
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: ${Variables.Container.Template};
    padding: ${Variables.Container.Padding};
    gap: ${Variables.Margins.L};
    align-items: start;

    & > * {
        grid-column: ${Variables.Container.Column};
    }

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: ${Variables.Container.TemplateTablet};
    }
`

function Container(props) {
    return <Wrapper>{props.children}</Wrapper>
}

export default Container
