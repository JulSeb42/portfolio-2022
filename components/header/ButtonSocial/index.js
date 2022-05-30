// Imports
import { capitalize } from "js-utils-julseb"

import Icon from "../../ui/Icon"
import Variables from "../../styles/Variables"

import { Container } from "./styles"

const ButtonSocial = ({ social }) => {
    return (
        <Container
            href={social.url}
            target="_blank"
            rel="noreferrer noopener"
            color={social.color}
            aria-label={`Link to ${capitalize(social.name)}`}
        >
            <Icon src={social.name} size={32} color={Variables.Colors.White} />
        </Container>
    )
}

export default ButtonSocial
