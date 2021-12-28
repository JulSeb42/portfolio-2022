// Packages
import React from "react"

// Styles
import "../styles/globals.css"
import GlobalStyles from "../components/styles/GlobalStyles"

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
