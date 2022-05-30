// Imports
import { useState } from "react"

import AppHead from "./AppHead"
import Header from "../header/Header"
import Footer from "../Footer"
import Loader from "./Loader"

const Page = ({ title, description, keywords, children }) => {
    // const [isLoading, setIsLoading] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    return (
        <>
            <AppHead
                title={title}
                description={description}
                keywords={keywords}
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
