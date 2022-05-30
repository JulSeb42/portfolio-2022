// Imports
import styled, { css } from "styled-components"
import { stringifyPx } from "js-utils-julseb"
import PropTypes from "prop-types"

import Variables from "../styles/Variables"

const Grid = styled.div`
    display: ${({ inline }) => (inline ? "inline-grid" : "grid")};
    grid-template-columns: ${({ col }) =>
        typeof col === "number" ? `repeat(${col}, 1fr)` : col};
    gap: ${({ gap }) => stringifyPx(gap)};
    justify-items: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    padding: ${({ padding }) => stringifyPx(padding)};
    margin: ${({ margin }) => stringifyPx(margin)};

    ${({ projects }) =>
        projects &&
        css`
            @media ${Variables.Breakpoints.Mobile} {
                grid-template-columns: repeat(1, 1fr);
            }
        `}
`

Grid.propTypes = {
    inline: PropTypes.bool,
    col: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    justify: PropTypes.oneOf(["start", "end", "center", "stretch"]),
    align: PropTypes.oneOf(["start", "end", "center", "stretch"]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Grid
