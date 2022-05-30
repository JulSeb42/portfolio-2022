// Imports
import { Container } from "./styles"

const Icon = ({ src, color, size, ...props }) => {
    return (
        <Container
            src={`/icons/${src}.svg`}
            size={size}
            color={color}
            {...props}
        />
    )
}

export default Icon
