// Imports
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { v4 as uuid } from "uuid"

import Page from "../components/layouts/Page"
import Cover from "../components/home/Cover"
import Grid from "../components/layouts/Grid"
import CardProject from "../components/home/CardProject"
import Variables from "../components/styles/Variables"

import uiTexts from "../data/ui-texts"

const Home = ({ projects }) => {
    return (
        <Page
            title="Home"
            description={uiTexts.descHome}
            keywords={uiTexts.keywordsHome}
        >
            <Cover />

            <Grid as="main" gap={Variables.Spacers.L} col={2} padding={Variables.Spacers.XXL} projects>
                {projects
                    .sort((a, b) => {
                        return a.frontMatter.order < b.frontMatter.order
                            ? -1
                            : 1
                    })
                    .map(project => (
                        <CardProject project={project} key={uuid()} />
                    ))}
            </Grid>
        </Page>
    )
}

export default Home

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
