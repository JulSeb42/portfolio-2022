// Packages
import React from "react"

// Components
import Modal from "./Modal"

// Data
import UiTexts from "../data/UITexts"
import SocialLinks from "../data/SocialLinks"
import ButtonSocial, { SocialContainer } from "../ui/ButtonSocial"

function Contact() {
    return (
        <Modal title="Contact">
            <p className="delay-1">{UiTexts.Contact1}</p>
            <p className="delay-2">{UiTexts.Contact2}</p>

            <SocialContainer className="delay-3">
                {SocialLinks.map(link => (
                    <ButtonSocial social={link} key={link.id} />
                ))}
            </SocialContainer>
        </Modal>
    )
}

export default Contact
