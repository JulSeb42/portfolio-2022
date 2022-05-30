// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"
import Picture from "../../ui/Picture"
import Fade from "../../ui/Fade"
import Link from "../../ui/Link"

const ImgStyle = `
    width: 100%;
    height: 100%;
    position: absolute;
    transition: ${Variables.Transitions.Long};

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`

const FadeStyled = styled(Fade)`
    aspect-ratio: 1;
`

const ImageContainer = styled.span`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    aspect-ratio: 1;
    overflow: hidden;
`

const Image = styled(Picture)`
    ${ImgStyle};
    z-index: 0;
`

const ImageHover = styled(Picture)`
    ${ImgStyle};
    opacity: 0;
    z-index: 1;
    aspect-ratio: 1;
`

const Container = styled(Link)`
    position: relative;
    aspect-ratio: 1;
    color: ${Variables.Colors.White};
    text-decoration: none;

    &:hover {
        ${ImageHover} {
            opacity: 1;
        }

        ${Image}, ${ImageHover} {
            transform: scale(1.05);
        }
    }
`

const Content = styled.span`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    background: ${Variables.Colors.Overlay};
    width: 100%;
    height: 100%;
    padding: ${Variables.Spacers.M};
`

export { Container, ImageContainer, Image, ImageHover, Content, FadeStyled }
