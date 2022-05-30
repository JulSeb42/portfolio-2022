// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"

const Container = styled.div`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: translateX(
        ${({ isVisible }) =>
            isVisible ? 0 : `calc(${Variables.Spacers.S} * -1)`}
    );
    visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
    transition: ${Variables.Transitions.Fade};
    will-change: opacity, visibility;
`

export { Container }
