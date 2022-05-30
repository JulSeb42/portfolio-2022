// Imports
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

import Page from "../../components/layouts/Page"
import CoverProject from "../../components/projects/CoverProject"
import Intro from "../../components/projects/Intro"
import Container from "../../components/projects/Container"
import Next from "../../components/projects/Next"

import * as Font from "../../components/styles/Font"
import Section from "../../components/projects/Section"
import FullBleed from "../../components/projects/FullBleed"
import LinkBehance from "../../components/projects/LinkBehance"
import Fade from "../../components/ui/Fade"

const components = {
    h3: Font.H3,
    h4: Font.H4,
    h5: Font.H5,
    ul: Font.List,
    p: Font.P,
    small: Font.Small,
    Font,
    Section,
    FullBleed,
    LinkBehance,
    Fade,
}

const Project = ({ frontMatter, mdxSource }) => {
    return (
        <Page
            title={frontMatter.title}
            description={frontMatter.description}
            keywords={frontMatter.keywords}
            cover={`/covers/l-${frontMatter.cover}`}
        >
            <CoverProject frontMatter={frontMatter} />

            <Container>
                <Intro frontMatter={frontMatter} />

                <MDXRemote {...mdxSource} components={components} />
            </Container>

            <Next href={`/projects/${frontMatter.nextProject}`} />
        </Page>
    )
}

export default Project

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join("projects"))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace(".mdx", ""),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(
        path.join("projects", slug + ".mdx"),
        "utf-8"
    )

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
        },
    }
}
