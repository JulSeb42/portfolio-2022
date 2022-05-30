// Imports
import { v4 as uuid } from "uuid"
import { capitalize } from "js-utils-julseb"

import { H3, P } from "../styles/Font"
import Flexbox from "../layouts/Flexbox"
import Variables from "../styles/Variables"
import LinkHover from "../ui/LinkHover"
import Grid from "../layouts/Grid"
import Fade from "../ui/Fade"

import siteData from "../../data/site-data"
import socialLinks from "../../data/social-links"
import uiTexts from "../../data/ui-texts"

import { Container, Row } from "./styles"

const Footer = () => {
    return (
        <Fade as={Container}>
            <Row>
                <Grid gap={Variables.Spacers.XXS}>
                    <H3>{uiTexts.textContact}</H3>

                    <LinkHover href={`mailto:${siteData.email}`}>
                        {siteData.email}
                    </LinkHover>
                </Grid>

                <Grid gap={Variables.Spacers.XXS}>
                    <H3>{uiTexts.textFollow}</H3>

                    <Flexbox
                        align="center"
                        wrap="wrap"
                        gap={Variables.Spacers.XS}
                    >
                        {socialLinks
                            .filter(link => link.id !== 0)
                            .map(link => (
                                <LinkHover href={link.url} key={uuid()} blank>
                                    {capitalize(link.name)}
                                </LinkHover>
                            ))}
                    </Flexbox>
                </Grid>
            </Row>

            <P>
                &copy; {siteData.author} | {siteData.year}
            </P>
        </Fade>
    )
}

export default Footer
