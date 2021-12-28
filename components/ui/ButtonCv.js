// Packages
import Link from "../utils/Link"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const ButtonCv = styled(Link)`
    font-size: ${Variables.FontSizes.TitlesS};
    text-decoration: none;
    color: ${Variables.Colors.Background};
    background-color: ${Variables.Colors.White20};
    ${Variables.Effects.Blur};
    padding: ${Variables.Margins.S} ${Variables.Margins.M};
    border-radius: ${Variables.Radiuses.M};
    font-weight: ${Variables.FontWeights.Bold};
    border: 1px solid ${Variables.Colors.White};
    display: inline-block;
    transition: ${Variables.Transitions.Short};

    &:hover {
        box-shadow: ${Variables.Shadows.Button};
        transform: scale(1.01) translateY(-1px);
    }
`

export default ButtonCv
