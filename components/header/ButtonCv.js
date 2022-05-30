// Imports
import styled from "styled-components"

import Variables from "../styles/Variables"
import Link from "../ui/Link"

const ButtonCv = styled(Link)`
    font-size: ${Variables.FontSizes.Titles.Desktop.S};
    text-decoration: none;
    background-color: ${Variables.Colors.White20};
    ${Variables.Effects.Blur};
    padding: ${Variables.Spacers.S} ${Variables.Spacers.M};
    border-radius: ${Variables.Radiuses.M};
    font-weight: ${Variables.FontWeights.Bold};
    border: 1px solid ${Variables.Colors.White};
    display: inline-block;
    transition: ${Variables.Transitions.Short};
    color: ${Variables.Colors.Black};

    &:hover {
        box-shadow: ${Variables.Shadows.Button};
        transform: scale(1.01) translateY(-1px);
    }
`

export default ButtonCv
