// Imports
import { useState } from "react"

import { H3 } from "../styles/Font"
import Grid from "../layouts/Grid"
import Variables from "../styles/Variables"
import Fade from "../ui/Fade"

const Section = ({ title, children }) => {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    return (
        <Grid className={`${loaded} loaded-delay-0`} gap={Variables.Spacers.XS}>
            {title && <Fade as={H3}>{title}</Fade>}

            {children}
        </Grid>
    )
}

export default Section
