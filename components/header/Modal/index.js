// Imports
import { useState, useEffect } from "react"

import NavLink from "../NavLink"
import Icon from "../../ui/Icon"
import Variables from "../../styles/Variables"

import { Container, Close, Content } from "./styles"

const Modal = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        isOpen
            ? document.body.classList.add("stop-scrolling") +
              document.querySelector("#burger").classList.add("hidden")
            : document.body.classList.remove("stop-scrolling") +
              document.querySelector("#burger").classList.remove("hidden")
    })

    return (
        <>
            <NavLink
                onClick={() => setIsOpen(!isOpen)}
                id={title === "About" ? 2 : 3}
            >
                {title}
            </NavLink>

            <Container className={isOpen && "open"} isOpen={isOpen}>
                <Close
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                >
                    <Icon src="close" size={48} color={Variables.Colors.Font} className="close" />
                </Close>

                <Content className="content">{children}</Content>
            </Container>
        </>
    )
}

export default Modal
