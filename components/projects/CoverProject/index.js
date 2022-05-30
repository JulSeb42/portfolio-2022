// Imports
import { useState, useEffect } from "react"
import Typed from "react-typed"

import { H1, H2 } from "../../styles/Font"

import { Container, Image, Content } from "./styles"

const CoverProject = ({ frontMatter }) => {
    const { cover, title, subtitle, position, city } = frontMatter

    const typed = [subtitle, position, city]

    const [isLoaded, setIsLoaded] = useState(false)

    setTimeout(() => {
        setIsLoaded(true)
    }, 1)

    const loaded = isLoaded ? "loaded" : "not-loaded"

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset >= 1) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        })
    }, [])

    return (
        <Container isScrolled={isScrolled}>
            <Image
                src={cover}
                alt={`Cover ${title}`}
                cover
                className={`${loaded} loaded-delay-0`}
            />

            <Content>
                <H1 className={`${loaded} loaded-delay-1`}>{title}</H1>

                <H2 className={`${loaded} loaded-delay-2`}>
                    <Typed
                        strings={typed}
                        typeSpeed={40}
                        backSpeed={20}
                        loop={true}
                    />
                </H2>
            </Content>
        </Container>
    )
}

export default CoverProject
