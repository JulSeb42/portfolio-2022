// Packages
import React, { useState } from "react"
import styled from "styled-components"
import Typed from "react-typed"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Fade from "../ui/Fade"

// Data
import SiteData from "../data/SiteData"
import UiTexts from "../data/UITexts"

// Styles
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: ${Variables.Margins.XXL} 5vw;
`

const Content = styled.div`
    max-width: 750px;
`

function Cover(props) {
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
                        strings={UiTexts.Typed}
                        typeSpeed={40}
                        backSpeed={20}
                        loop={true}
                    />
                </Font.H3>

                <Font.H1 className={`${loaded} loaded-delay-1`}>
                    Hi, I&apos;m {SiteData.Author}
                </Font.H1>

                <Font.H5 className={`${loaded} loaded-delay-2`}>
                    {UiTexts.IntroHome}
                </Font.H5>
            </Content>
        </Fade>
    )
}

export default Cover
