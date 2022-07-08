// Imports
import { useLayoutEffect, useState, useEffect } from "react"
import Modal from "./Modal"
import Flexbox from "../layouts/Flexbox"
import ButtonCv from "./ButtonCv"
import Variables from "../styles/Variables"

import uiTexts from "../../data/ui-texts"
import cvLinks from "../../data/cv-links"

const About = () => {
    const [direction, setDirection] = useState("row")

    const directionFunc = () => {
        if (window.innerWidth < 600) {
            setDirection("column")
        } else {
            setDirection("row")
        }
    }

    useEffect(() => {
        directionFunc()
    }, [])

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            directionFunc()
        })
    })

    return (
        <Modal title="About">
            <p className="delay-1">{uiTexts.about1}</p>
            <p className="delay-2">{uiTexts.about2}</p>

            <Flexbox
                className="delay-3"
                gap={Variables.Spacers.XS}
                direction={direction}
            >
                {cvLinks.map(link => (
                    <ButtonCv
                        href={link.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        key={link.url}
                    >
                        {uiTexts.buttonCv} ({link.lang.toUpperCase()})
                    </ButtonCv>
                ))}
            </Flexbox>
        </Modal>
    )
}

export default About
