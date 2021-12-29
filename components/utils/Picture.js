// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.picture``

function Picture(props) {
    return (
        <Container {...props}>
            <source media="(max-width: 600px)" srcSet={props.srcSmall} />

            <source media="(max-width: 1024px)" srcSet={props.srcMedium} />

            <img src={props.srcLarge} alt={props.alt} />
        </Container>
    )
}

export default Picture
