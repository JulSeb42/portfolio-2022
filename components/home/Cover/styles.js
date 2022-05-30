// Imports
import styled from "styled-components"

import Variables from "../../styles/Variables"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: ${Variables.Spacers.XXL} 5vw;
`

const Content = styled.div`
    width: 100%;
    max-width: 750px;
`

export { Container, Content }
