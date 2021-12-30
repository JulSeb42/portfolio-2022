// Packages
import React from "react"
import Link from "../utils/Link"

// Components
import * as Font from "../styles/Font"
import UiTexts from "../data/UITexts"

function LinkBehance(props) {
    return (
        <Font.P>
            <Link href={props.href} target="_blank" rel="noreferrer noopener">
                {props.github
                    ? "See the full project on Github"
                    : UiTexts.LinkBehance}
            </Link>
        </Font.P>
    )
}

export default LinkBehance
