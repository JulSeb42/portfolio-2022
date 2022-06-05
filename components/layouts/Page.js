// Imports
import { useState } from "react"

import AppHead from "./AppHead"
import Header from "../header/Header"
import Footer from "../Footer"
import Loader from "./Loader"

const Page = ({ title, description, keywords, children, cover }) => {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    return (
        <>
            <AppHead
                title={title}
                description={description}
                keywords={keywords}
                cover={cover}
            />

            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />

                    {children}

                    <Footer />
                </>
            )}
        </>
    )
}

export default Page
