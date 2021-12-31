// Packages
import React, { useState } from "react"
import styled from "styled-components"
import Link from "../utils/Link"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import Fade from "../ui/Fade"

// Styles
const Container = styled(Link)`
    width: 100%;
    height: 50vw;
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

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${Variables.Colors.Overlay};
        z-index: 1;
    }

    &:hover .background {
        background: ${props => `url("/covers/l-${props.backgroundHover}")`};
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transform: scale(1.05);
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
`

function Card(props) {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    // className={`${loaded} loaded-delay-0`}

    return (
        <Fade>
            <Container
                href={`/projects/${props.project.slug}`}
                backgroundHover={props.project.frontMatter.coverHover}
                className={`${loaded} loaded-delay-0`}
            >
                <Img
                    background={props.project.frontMatter.cover}
                    className="background"
                />
                <Font.H2>{props.project.frontMatter.title}</Font.H2>
                <Font.H4>{props.project.frontMatter.position}</Font.H4>
            </Container>
        </Fade>
    )
}

export default Card
