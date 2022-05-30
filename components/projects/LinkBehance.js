// Imports
import { useState } from "react"

import LinkHover from "../ui/LinkHover"
import Fade from "../ui/Fade"
import { P } from "../styles/Font"

import uiTexts from "../../data/ui-texts"

const LinkBehance = ({ href, github }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    return (
        <Fade as={P} className={`${loaded} loaded-delay-0`}>
            <LinkHover href={href} blank>
                {github ? uiTexts.linkGithub : uiTexts.linkBehance}
            </LinkHover>
        </Fade>
    )
}

export default LinkBehance
