// Imports
import Link from "next/link"

import { Container } from "./styles"

const LinkHover = ({ href, blank, children }) => {
    return blank ? (
        <Container href={href} target="_blank" rel="noreferrer noopener">
            {children}
        </Container>
    ) : (
        <Link href={href} passHref>
            <Container>{children}</Container>
        </Link>
    )
}

export default LinkHover
