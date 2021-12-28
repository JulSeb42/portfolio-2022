// Packages
import React from "react"

// Components
import AppHead from "./AppHead"
import Header from "../header/Header"
import Footer from "../footer/Footer"

function Page(props) {
    return (
        <>
            <AppHead title={props.title} />

            <Header />

            {props.children}

            <Footer />
        </>
    )
}

export default Page
