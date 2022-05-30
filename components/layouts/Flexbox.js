// Imports
import styled from "styled-components"
import PropTypes from "prop-types"
import { stringifyPx } from "js-utils-julseb"

const Flexbox = styled.div`
    display: ${({ inline }) => (inline ? "inline-flex" : "flex")};
    align-items: ${({ align }) => align};
    justify-content: ${({ justify }) => justify};
    flex-wrap: ${({ wrap }) => wrap};
    gap: ${({ gap }) => stringifyPx(gap)};
    padding: ${({ padding }) => stringifyPx(padding)};
    margin: ${({ margin }) => stringifyPx(margin)};
`

Flexbox.propTypes = {
    inline: PropTypes.bool,
    gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    justify: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
        "start",
        "end",
        "left",
        "right",
    ]),
    align: PropTypes.oneOf([
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "first baseline",
        "last baseline",
        "start",
        "end",
        "self-start",
        "self end",
    ]),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

export default Flexbox
