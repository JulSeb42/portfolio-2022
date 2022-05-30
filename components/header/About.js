// Imports
import Modal from "./Modal"
import Flexbox from "../layouts/Flexbox"
import ButtonCv from "./ButtonCv"

import uiTexts from "../../data/ui-texts"
import cvLinks from "../../data/cv-links"

const About = () => {
    return (
        <Modal title="About">
            <p className="delay-1">{uiTexts.about1}</p>
            <p className="delay-2">{uiTexts.about2}</p>

            <Flexbox className="delay-3">
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
