// Imports
import styled from "styled-components"

import Flexbox from "../layouts/Flexbox"
import Variables from "../styles/Variables"

const Container = styled.footer`
    display: grid;
    gap: ${Variables.Spacers.S};
    background-color: ${Variables.Colors.DarkGray};
    padding: ${Variables.Spacers.M} 5vw;
    color: ${Variables.Colors.White};
`

const Row = styled(Flexbox)`
    gap: ${Variables.Spacers.XXL};

    @media ${Variables.Breakpoints.Tablet} {
        flex-direction: column;
        gap: ${Variables.Spacers.S};
    }
`

export { Container, Row }
