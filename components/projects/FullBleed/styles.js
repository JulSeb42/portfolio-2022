// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"

const Container = styled.div`
    grid-column: 1 / 4 !important;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Spacers.XS};
    padding: 0 ${Variables.Spacers.XXL};

    a {
        display: block;
    }

    small {
        width: 100%;
        text-align: center;
    }
`

const Video = styled.iframe`
    width: 100%;
    aspect-ratio: 16/9;
`

export { Container, Video }
