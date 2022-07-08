// Imports
import React, { useState, useEffect, useLayoutEffect } from "react"
import { v4 as uuid } from "uuid"

import { H4, P } from "../styles/Font"
import Flexbox from "../layouts/Flexbox"
import Fade from "../ui/Fade"
import Variables from "../styles/Variables"
import Grid from "../layouts/Grid"

import uiTexts from "../../data/ui-texts"

const Intro = ({ frontMatter }) => {
    const { dates, skills } = frontMatter

    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    const [col, setCol] = useState("80% 20%")

    const colFunc = () => {
        if (window.innerWidth < 600) {
            setCol("1fr")
        } else {
            setCol("80% 20%")
        }
    }

    useEffect(() => {
        colFunc()
    }, [])

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            colFunc()
        })
    })

    return (
        <Grid col={col} gap={Variables.Spacers.L}>
            <Grid gap={Variables.Spacers.XXS}>
                <Fade as={H4} className={`${loaded} loaded-delay-0`}>
                    {uiTexts.titleSkills}
                </Fade>

                <Flexbox
                    className={`${loaded} loaded-delay-1`}
                    gap={`${Variables.Spacers.XXS} ${Variables.Spacers.S}`}
                    wrap="wrap"
                >
                    {skills.map(skill => (
                        <Fade as={P} key={uuid()}>
                            {skill}
                        </Fade>
                    ))}
                </Flexbox>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <Fade as={H4} className={`${loaded} loaded-delay-2`}>
                    {uiTexts.titleDates}
                </Fade>

                <Fade as={P} className={`${loaded} loaded-delay-3`}>
                    {dates}
                </Fade>
            </Grid>
        </Grid>
    )
}

export default Intro
