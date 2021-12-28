// Packages
import React from "react"
import styled from "styled-components"
import Link from "../utils/Link"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"

// Styles
const Container = styled(Link)`
    width: 100%;
    height: 90vh;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    padding: ${Variables.Margins.S};
    color: ${Variables.Colors.White};
    text-decoration: none;
    overflow: hidden;

    h2,
    h4 {
        position: relative;
        z-index: 2;
    }
`

const Img = styled.div`
    background: ${props => `url("/covers/l-${props.background}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: ${Variables.Transitions.Bezier};
    display: block;

    &:hover {
        background: ${props => `url("/covers/l-${props.backgroundHover}")`};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transform: scale(1.05);
    }
`

function Card(props) {
    return (
        <Container href={`/projects/${props.project.slug}`}>
            <Img
                background={props.project.frontMatter.cover}
                backgroundHover={props.project.frontMatter.coverHover}
                className="background"
            />
            <Font.H2>{props.project.frontMatter.title}</Font.H2>
            <Font.H4>{props.project.frontMatter.subtitle}</Font.H4>
        </Container>
    )
}

export default Card
