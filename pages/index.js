// Packages
import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

// Components
import Page from "../components/layouts/Page"
import Cover from "../components/home/Cover"
import List from "../components/home/List"
import Card from "../components/home/Card"
import UiTexts from "../components/data/UITexts"

export default function Home({ projects }) {
    console.log(UiTexts.KeywordsHome)
    return (
        <Page title="Home" description={UiTexts.DescHome} keywords={UiTexts.KeywordsHome}>
            <Cover />

            <List>
                {projects
                    .sort((a, b) => {
                        return a.frontMatter.order < b.frontMatter.order ? -1 : 1
                    })
                    .map((project, i) => (
                        <Card project={project} key={i} />
                    ))}
            </List>
        </Page>
    )
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join("projects"))

    const projects = files.map(filename => {
        const markdownWithMeta = fs.readFileSync(
            path.join("projects", filename),
            "utf-8"
        )

        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            frontMatter,
            slug: filename.split(".")[0],
        }
    })

    return {
        props: {
            projects,
        },
    }
}
