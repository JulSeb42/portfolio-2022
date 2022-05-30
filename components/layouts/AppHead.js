// Imports
import Head from "next/head"
import { useRouter } from "next/router"
import { v4 as uuid } from "uuid"
import { slugify } from "js-utils-julseb"

import siteData from "../../data/site-data"

const AppHead = ({ title, description, keywords, cover }) => {
    const router = useRouter()

    const meta = [
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1",
        },
        {
            name: "description",
            content: description,
        },
        {
            name: "author",
            content: siteData.author,
        },
        {
            name: "keywords",
            content: `${siteData.keywords}${keywords ? `, ${keywords}` : ""}`,
        },
        {
            property: "og:title",
            content: title,
        },
        {
            property: "og:url",
            content:
                router.pathname === "/"
                    ? siteData.url
                    : `${siteData.url}/projects/${slugify(title)}`,
        },
        {
            property: "og:image",
            content: cover ? cover : siteData.cover,
        },
        {
            property: "og:type",
            content: siteData.type,
        },
        {
            property: "og:site_name",
            content: siteData.title,
        },
        {
            property: "og:locale",
            content: siteData.language,
        },
    ]

    return (
        <Head>
            <title>
                {title} | {siteData.title}
            </title>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />

            {meta.map(meta => (
                <meta
                    name={meta.name && meta.name}
                    property={meta.property && meta.property}
                    content={meta.content}
                    key={uuid()}
                />
            ))}

            <link href={`/${siteData.favicon}`} rel="shortcut icon" />
        </Head>
    )
}

export default AppHead
