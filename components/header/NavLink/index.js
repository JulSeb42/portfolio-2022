// Imports
import Link from "../../ui/Link"

import { Container } from "./styles"

const NavLink = ({ href, id, children, ...props }) => {
    return (
        <Container
            as={href && Link}
            href={href}
            className={`button-delay-${id}`}
            {...props}
        >
            {children}
        </Container>
    )
}

export default NavLink
