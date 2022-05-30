// Imports
import styled from "styled-components"
import SVG from "react-inlinesvg"

const Container = styled(SVG)`
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    fill: ${({ color }) => color};

    path {
        fill: ${({ color }) => color};
    }
`

Container.defaultProps = {
    color: "currentColor",
}

export { Container }
