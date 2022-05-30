// Imports
import { useState, useEffect, useRef } from "react"

import { Container } from "./styles"

const Fade = ({ children, ...props }) => {
    const [isVisible, setIsVisible] = useState(true)
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting))
        })
        observer.observe(domRef.current)
    })

    return (
        <Container isVisible={isVisible} ref={domRef} {...props}>
            {children}
        </Container>
    )
}

export default Fade
