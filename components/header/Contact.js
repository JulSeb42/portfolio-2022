// Imports
import Modal from "./Modal"
import ButtonSocial from "./ButtonSocial"
import Flexbox from "../layouts/Flexbox"
import Variables from "../styles/Variables"

import socialLinks from "../../data/social-links"
import uiTexts from "../../data/ui-texts"

const Contact = () => {
    return (
        <Modal title="Contact">
            <p className="delay-1">{uiTexts.contact1}</p>
            <p className="delay-2">{uiTexts.contact2}</p>

            <Flexbox
                className="delay-3"
                align="center"
                wrap="wrap"
                gap={Variables.Spacers.M}
            >
                {socialLinks.map(link => (
                    <ButtonSocial social={link} key={link.id} />
                ))}
            </Flexbox>
        </Modal>
    )
}

export default Contact
