// Packages
import React from "react"
import styled from "styled-components"
import Link from "../utils/Link"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Picture from "../utils/Picture"
import UiTexts from "../data/UITexts"

// Styles
const Container = styled.div`
    grid-column: 1 / 4;
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
    return (
        <Container>
            {props.img ? (
                props.href ? (
                    <>
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
                            />
                        </Link>

                        <Font.Small>{UiTexts.TextVisit}</Font.Small>
                    </>
                ) : (
                    <Picture
                        srcSmall={`/images/s-${props.img}`}
                        srcMedium={`/images/m-${props.img}`}
                        srcLarge={`/images/l-${props.img}`}
                        alt={props.alt}
                    />
                )
            ) : (
                <Video src={props.video} frameBorder="0" allowFullScreen />
            )}
        </Container>
    )
}

export default FullBleed
