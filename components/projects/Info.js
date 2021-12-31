// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import UiTexts from "../data/UITexts"
import Fade from "../ui/Fade"

// Styles
const Container = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    gap: ${Variables.Margins.L};
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XXS};
    align-content: start;
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
    li:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }
`

function Info(props) {
    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"
    return (
        <Container>
            <Item>
                <Fade as={Font.H4} className={`${loaded} loaded-delay-0`}>
                    {UiTexts.TitleSkills}
                </Fade>

                <List className={`${loaded} loaded-delay-1`}>
                    {props.frontMatter.skills.map((skill, i) => (
                        <Fade as="li" key={i}>
                            {skill}
                        </Fade>
                    ))}
                </List>
            </Item>

            <Item>
                <Fade>
                    <Font.H4 className={`${loaded} loaded-delay-2`}>
                        {UiTexts.TitleDates}
                    </Font.H4>
                </Fade>

                <Fade>
                    <Font.P className={`${loaded} loaded-delay-3`}>
                        {props.frontMatter.dates}
                    </Font.P>
                </Fade>
            </Item>
        </Container>
    )
}

export default Info
