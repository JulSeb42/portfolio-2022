// Packages
import { createGlobalStyle } from "styled-components"
import * as Variables from "./Variables"

// Styles
const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: ${Variables.FontFamilies.Body};
        line-height: ${Variables.LineHeight};
        background-color: ${Variables.Colors.Background};
        color: ${Variables.Colors.Font};
        font-size: ${Variables.FontSizes.Body};

        &.stop-scrolling {
            height: 100vh;
            overflow: hidden;
        }
    }
`

export default GlobalStyles
