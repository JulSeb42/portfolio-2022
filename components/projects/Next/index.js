// Imports
import { useState } from "react"

import Variables from "../../styles/Variables"
import Fade from "../../ui/Fade"

import uiTexts from "../../../data/ui-texts"

import { Container, Icon } from "./styles"

const Next = ({ href }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    return (
        <Fade>
            <Container href={href} className={`${loaded} loaded-delay-0`}>
                {uiTexts.nextProject}

                <Icon
                    src="arrow-right"
                    size={24}
                    color={Variables.Colors.White}
                />
            </Container>
        </Fade>
    )
}

export default Next
