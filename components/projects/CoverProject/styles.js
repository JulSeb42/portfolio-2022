// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"
import Picture from "../../ui/Picture"

const Container = styled.div`
    width: 100%;
    height: ${({ isScrolled }) => (isScrolled ? 0 : "100vh")};
    transition: ${Variables.Transitions.Bezier};
    position: relative;
    overflow: hidden;
    border: ${Variables.Spacers.XXL} solid ${Variables.Colors.White};
`

const Image = styled(Picture)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Content = styled.div`
    position: relative;
    z-index: 1;
    color: ${Variables.Colors.White};
    display: flex;
    flex-direction: column;
    height: 100%;
    background: ${Variables.Colors.Overlay};
    padding: ${Variables.Spacers.XXL};
    justify-content: flex-end;
    align-items: center;

    h1,
    h2 {
        width: 100%;
        max-width: 750px;
    }
`

export { Container, Image, Content }
