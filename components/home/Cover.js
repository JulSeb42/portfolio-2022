// Packages
import React from "react"
import styled from "styled-components"
import Typed from "react-typed"

// Styles
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

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
    return (
        <Container>
            <Content>
                <Font.H3>
                    <Typed
                        strings={[
                            "UX Engineer",
                            "UI Designer",
                            "Front End Developer",
                        ]}
                        typeSpeed={40}
                        backSpeed={20}
                        loop={true}
                    />
                </Font.H3>

                <Font.H1>Hi, I&apos;m {SiteData.Author}</Font.H1>

                <Font.H5>{UiTexts.IntroHome}</Font.H5>
            </Content>
        </Container>
    )
}

export default Cover
