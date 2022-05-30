// Imports
import Variables from "../../styles/Variables"

import { Container, Img } from "./styles"

const Picture = ({ src, alt, cover, ...props }) => {
    return (
        <Container {...props}>
            <source
                media={Variables.Breakpoints.Mobile}
                srcSet={`/${cover ? "covers" : "images"}/s-${src}`}
            />

            <source
                media={Variables.Breakpoints.Tablet}
                srcSet={`/${cover ? "covers" : "images"}/m-${src}`}
            />

            <Img src={`/${cover ? "covers" : "images"}/l-${src}`} alt={alt} />
        </Container>
    )
}

export default Picture
