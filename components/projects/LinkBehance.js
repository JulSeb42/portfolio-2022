// Packages
import React, { useState } from "react"
import Link from "../utils/Link"

// Components
import * as Font from "../styles/Font"
import UiTexts from "../data/UITexts"
import Fade from "../ui/Fade"

function LinkBehance(props) {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    return (
        <Fade as={Font.P} className={`${loaded} loaded-delay-0`}>
            <Link href={props.href} target="_blank" rel="noreferrer noopener">
                {props.github
                    ? "See the full project on Github"
                    : UiTexts.LinkBehance}
            </Link>
        </Fade>
    )
}

export default LinkBehance
