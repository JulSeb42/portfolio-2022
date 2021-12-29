// Packages
import React from "react"
import styled from "styled-components"

// Components
import Modal from "./Modal"
import ButtonCv from "../ui/ButtonCv"
import * as Variables from "../styles/Variables"

// Data
import UiTexts from "../data/UITexts"
import CvLinks from "../data/CvLinks"

// Styles
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a:not(:last-child) {
        margin-right: ${Variables.Margins.S};
    }
`

function About() {
    return (
        <Modal title="About">
            <p className="delay-1">{UiTexts.About1}</p>
            <p className="delay-2">{UiTexts.About2}</p>

            <ButtonsContainer className="delay-3">
                {CvLinks.map(cv => (
                    <ButtonCv
                        href={cv.Url}
                        key={cv.Url}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {UiTexts.ButtonCv} ({cv.Lang.toUpperCase()})
                    </ButtonCv>
                ))}
            </ButtonsContainer>
        </Modal>
    )
}

export default About
