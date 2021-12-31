// Packages
import React, { useState } from "react"
import styled from "styled-components"
import Link from "../utils/Link"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Picture from "../utils/Picture"
import UiTexts from "../data/UITexts"
import Fade from "../ui/Fade"

// Styles
const Container = styled.div`
    grid-column: 1 / 4 !important;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
    padding: 0 3vw;

    a {
        display: block;
    }

    small {
        width: 100%;
        text-align: center;
    }
`

const Video = styled.iframe`
    width: 100%;
    height: 35vw;
`

function FullBleed(props) {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    // className={`${loaded} loaded-delay-0`}
    return (
        <Container>
            {props.img ? (
                props.href ? (
                    <>
                        <Fade>
                            <Link
                                href={props.href}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Picture
                                    srcSmall={`/images/s-${props.img}`}
                                    srcMedium={`/images/m-${props.img}`}
                                    srcLarge={`/images/l-${props.img}`}
                                    alt={props.alt}
                                    className={`${loaded} loaded-delay-0`}
                                />
                            </Link>
                        </Fade>

                        <Fade
                            as={Font.Small}
                            className={`${loaded} loaded-delay-1`}
                        >
                            {UiTexts.TextVisit}
                        </Fade>
                    </>
                ) : (
                    <Fade>
                        <Picture
                            srcSmall={`/images/s-${props.img}`}
                            srcMedium={`/images/m-${props.img}`}
                            srcLarge={`/images/l-${props.img}`}
                            alt={props.alt}
                            className={`${loaded} loaded-delay-0`}
                        />
                    </Fade>
                )
            ) : (
                <Fade>
                    <Video
                        src={props.video}
                        frameBorder="0"
                        allowFullScreen
                        className={`${loaded} loaded-delay-0`}
                    />
                </Fade>
            )}
        </Container>
    )
}

export default FullBleed
