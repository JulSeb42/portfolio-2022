// Packages
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Typed from "react-typed"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Picture from "../utils/Picture"
import Fade from "../ui/Fade"

// Styles
const Container = styled.div`
    width: 100%;
    height: ${props => props.height};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: ${props => props.padding} 5vw;
    transition: ${Variables.Transitions.Bezier};
    color: ${Variables.Colors.White};

    &:before {
        content: "";
        position: absolute;
        width: 94vw;
        height: calc(100% - 6vw);
        top: 3vw;
        left: 3vw;
        background: ${Variables.Colors.Overlay};
        z-index: 1;
    }
`

const Img = styled(Picture)`
    position: fixed;
    width: 94vw;
    height: calc(100% - 6vw);
    top: 3vw;
    left: 3vw;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 2;
    width: 80%;
    max-width: 750px;
`

function Cover(props) {
    const [height, setHeight] = useState("100vh")
    const [padding, setPadding] = useState(
        `calc(${Variables.Margins.XXL} + 3vw)`
    )

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 10) {
                setHeight(0)
                setPadding(0)
            } else {
                setHeight("100vh")
                setPadding(Variables.Margins.XXL)
            }
        })
    }, [])

    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    // className={`${loaded} loaded-delay-0`}

    return (
        <Fade>
            <Container height={height} padding={padding}>
                <Img
                    srcSmall={`/covers/s-${props.frontMatter.cover}`}
                    srcMedium={`/covers/m-${props.frontMatter.cover}`}
                    srcLarge={`/covers/l-${props.frontMatter.cover}`}
                    alt={`Cover ${props.frontMatter.title}`}
                    className={`${loaded} loaded-delay-0`}
                />

                <Content>
                    <Fade>
                        <Font.H1 className={`${loaded} loaded-delay-1`}>
                            {props.frontMatter.title}
                        </Font.H1>
                    </Fade>

                    <Fade>
                        <Font.H2 className={`${loaded} loaded-delay-2`}>
                            <Typed
                                strings={[
                                    props.frontMatter.subtitle,
                                    props.frontMatter.position,
                                    props.frontMatter.city,
                                ]}
                                typeSpeed={40}
                                backSpeed={20}
                                loop={true}
                            />
                        </Font.H2>
                    </Fade>
                </Content>
            </Container>
        </Fade>
    )
}

export default Cover
