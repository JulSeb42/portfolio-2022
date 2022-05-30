// Imports
import { useState } from "react"

import { Small } from "../../styles/Font"
import Picture from "../../ui/Picture"
import Fade from "../../ui/Fade"
import Link from "../../ui/Link"

import uiTexts from "../../../data/ui-texts"

import { Container, Video } from "./styles"

const FullBleed = ({ img, alt, href, video }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    return (
        <Container>
            {img ? (
                href ? (
                    <>
                        <Fade>
                            <Link
                                href={href}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Picture
                                    src={img}
                                    alt={alt}
                                    className={`${loaded} loaded-delay-0`}
                                />
                            </Link>
                        </Fade>

                        <Fade as={Small} className={`${loaded} loaded-delay-1`}>
                            {uiTexts.textVisit}
                        </Fade>
                    </>
                ) : (
                    <Fade>
                        <Picture
                            src={img}
                            alt={alt}
                            className={`${loaded} loaded-delay-0`}
                        />
                    </Fade>
                )
            ) : (
                <Fade>
                    <Video
                        src={video}
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
