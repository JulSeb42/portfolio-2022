// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const List = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${Variables.Margins.L};
    padding: 100px;
`

export default List
