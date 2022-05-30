// Imports
import styled from "styled-components"

import IconMixin from "../ui/IconMixin"
import Variables from "./Variables"

const H1 = styled.h1`
    font-size: ${Variables.FontSizes.Titles.Desktop.XL};
    font-weight: ${Variables.FontWeights.Black};

    @media ${Variables.Breakpoints.Mobile} {
        font-size: ${Variables.FontSizes.Titles.Mobile.XL};
    }
`

const H2 = styled.h2`
    font-size: ${Variables.FontSizes.Titles.Desktop.L};
    font-weight: ${Variables.FontWeights.Bold};

    @media ${Variables.Breakpoints.Mobile} {
        font-size: ${Variables.FontSizes.Titles.Mobile.L};
    }
`

const H3 = styled.h3`
    font-size: ${Variables.FontSizes.Titles.Desktop.M};
    font-weight: ${Variables.FontWeights.Black};
`

const H4 = styled.h4`
    font-size: ${Variables.FontSizes.Titles.Desktop.S};
    font-weight: ${Variables.FontWeights.Black};
`

const H5 = styled.h5`
    font-size: ${Variables.FontSizes.Titles.Desktop.S};
    font-weight: ${Variables.FontWeights.Bold};
`

const P = styled.p`
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Regular};

    a {
        color: ${Variables.Colors.Blue};
        text-decoration: none;
        font-weight: ${Variables.FontWeights.Black};
        position: relative;

        &:after {
            content: "";
            width: 0;
            height: 2px;
            position: absolute;
            bottom: -2px;
            left: 0;
            background-color: currentColor;
            transition: ${Variables.Transitions.Bezier};
        }

        &:hover:after {
            width: 100%;
        }
    }

    code {
        font-family: ${Variables.FontFamilies.Code};
    }
`

const Small = styled.small`
    font-size: ${Variables.FontSizes.Small};
    font-weight: ${Variables.FontWeights.Regular};
    text-align: center;
    width: 100%;
    display: block;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        display: grid;
        grid-template-columns: 14px 1fr;
        gap: ${Variables.Spacers.XXS};

        &:before {
            ${IconMixin({
                icon: "chevron-right",
                size: 14,
                color: "currentColor",
            })};
            margin-top: 5px;
        }
    }
`

export { H1, H2, H3, H4, H5, P, Small, List }
