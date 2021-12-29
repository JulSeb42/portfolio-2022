// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Font from "../styles/Font"
import * as Variables from "../styles/Variables"
import UiTexts from "../data/UITexts"

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
    return (
        <Container>
            <Item>
                <Font.H4>{UiTexts.TitleSkills}</Font.H4>

                <List>
                    {props.frontMatter.skills.map((skill, i) => (
                        <li key={i}>{skill}</li>
                    ))}
                </List>
            </Item>

            <Item>
                <Font.H4>{UiTexts.TitleDates}</Font.H4>
                <Font.P>{props.frontMatter.dates}</Font.P>
            </Item>
        </Container>
    )
}

export default Info
