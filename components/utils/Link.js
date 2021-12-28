// Packages
import React from "react"
import NextLink from "next/link"

function Link(props) {
    return (
        <NextLink href={props.href} passHref>
            <a {...props}>{props.children}</a>
        </NextLink>
    )
}

export default Link
