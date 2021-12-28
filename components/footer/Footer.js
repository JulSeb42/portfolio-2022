// Packages
import React from "react"
import styled from "styled-components"
import Link from "../utils/Link"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Data
import SiteData from "../data/SiteData"
import UiTexts from "../data/UITexts"
import SocialLinks from "../data/SocialLinks"

// Styles
const Container = styled.footer`
    width: 100%;
    padding: ${Variables.Margins.M} 5vw;
    background-color: ${Variables.Colors.DarkGray};
`

const Row = styled.div`
    display: flex;

    & > span:first-child {
        margin-right: ${Variables.Margins.XXL};
    }

    &:first-of-type {
        margin-bottom: ${Variables.Margins.S};
    }
`

const Col = styled.span`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
    align-content: start;
`

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;

    li:not(:last-child) {
        margin-right: ${Variables.Margins.M};
    }

    a {
        color: ${Variables.Colors.Blue};
        text-decoration: none;
        font-weight: ${Variables.FontWeights.Bold};
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
`

function Footer() {
    return (
        <Container>
            <Row>
                <Col>
                    <Font.H3>Contact me here</Font.H3>

                    <Font.P>
                        <Link href={`mailto:${SiteData.Email}`}>
                            {SiteData.Email}
                        </Link>
                    </Font.P>
                </Col>

                <Col>
                    <Font.H3>Follow me there</Font.H3>
                    <List>
                        {SocialLinks.map(link => (
                            <li key={link.id}>
                                <Link
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {link.name.charAt(0).toUpperCase() +
                                        link.name.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </List>
                </Col>
            </Row>

            <Row>
                <Font.P>{UiTexts.CopyFooter}</Font.P>
            </Row>
        </Container>
    )
}

export default Footer
