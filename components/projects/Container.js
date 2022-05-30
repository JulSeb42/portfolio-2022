// Imports
import styled from "styled-components"

import Variables from "../styles/Variables"

const Container = styled.main`
    display: grid;
    grid-template-columns: ${Variables.Container.Template};
    gap: ${Variables.Spacers.L};
    min-height: 100vh;
    width: 100%;
    padding: ${Variables.Spacers.XXL} 0;
    align-items: start;

    & > * {
        grid-column: 2;
    }
`

export default Container
