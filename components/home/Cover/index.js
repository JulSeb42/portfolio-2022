// Imports
import { useState } from "react"
import Typed from "react-typed"

import * as Font from "../../styles/Font"
import Fade from "../../ui/Fade"

import uiTexts from "../../../data/ui-texts"

import { Container, Content } from "./styles"

const Cover = () => {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    return (
        <Fade as={Container}>
            <Content>
                <Font.H3 className={`${loaded} loaded-delay-0`}>
                    <Typed
                        strings={uiTexts.typed}
                        typeSpeed={40}
                        backSpeed={20}
                        loop={true}
                    />
                </Font.H3>

                <Font.H1 className={`${loaded} loaded-delay-1`}>
                    {uiTexts.headingHome}
                </Font.H1>

                <Font.H5 className={`${loaded} loaded-delay-2`}>
                    {uiTexts.introHome}
                </Font.H5>
            </Content>
        </Fade>
    )
}

export default Cover
