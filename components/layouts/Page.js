// Packages
import React, { useState } from "react"

// Components
import AppHead from "./AppHead"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Loader from "./Loader"

function Page(props) {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 2000)

    return (
        <>
            <AppHead
                title={props.title}
                keywords={props.keywords}
                description={props.description}
                cover={props.cover}
            />

            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Header />

                    {props.children}

                    <Footer />
                </>
            )}
        </>
    )
}

export default Page
