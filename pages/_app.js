// Imports
import "../styles/index.css"
import GlobalStyles from "../components/styles/GlobalStyles"

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
