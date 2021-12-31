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

    .not-loaded {
        transform: translateX(-10px);
        opacity: 0;
        transition: ${Variables.Transitions.Fade};
    }

    .loaded {
        transform: translateX(0);
        opacity: 1;
        transition: ${Variables.Transitions.Fade};
    }

    .loaded-delay-0 {
        transition-delay: 0s;
    }

    .loaded-delay-1 {
        transition-delay: 0.2s;
    }

    .loaded-delay-2 {
        transition-delay: 0.4s;
    }

    .loaded-delay-3 {
        transition-delay: 0.6s;
    }
`

export default GlobalStyles
