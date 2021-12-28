// Packages
import React from "react"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Components
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"

const components = {
    h3: Font.H3,
    h4: Font.H4,
    h5: Font.H5,
    ul: Font.List,
    p: Font.P,
    small: Font.Small,
}

function ProjectPage({ frontMatter, mdxSource }) {
    return (
        <Page title={frontMatter.title}>
            <MDXRemote {...mdxSource} components={components} />
        </Page>
    )
}

export default ProjectPage

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
