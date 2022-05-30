// Imports
import { H2, H4 } from "../../styles/Font"
import Link from "../../ui/Link"

import {
    Container,
    ImageContainer,
    Image,
    ImageHover,
    Content,
    FadeStyled,
} from "./styles"

const CardProject = ({ project }) => {
    const { cover, title, coverHover, position } = project.frontMatter

    return (
        <FadeStyled>
            <Container as={Link} href={`/projects/${project.slug}`}>
                <ImageContainer>
                    <Image src={cover} alt={`Cover ${title}`} cover />
                    <ImageHover src={coverHover} alt={`Cover ${title}`} cover />
                </ImageContainer>

                <Content>
                    <H2>{title}</H2>
                    <H4>{position}</H4>
                </Content>
            </Container>
        </FadeStyled>
    )
}

export default CardProject
