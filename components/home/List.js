// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const List = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${Variables.Margins.L};
    padding: 3vw;

    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: repeat(1, 1fr);

        & > div {
            aspect-ratio: 1;

            a {
                width: 100%;
                height: 100%;
            }
        }
    }
`

export default List
