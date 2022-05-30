// Imports
import styled from "styled-components"

import Link from "../../ui/Link"
import Variables from "../../styles/Variables"

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Spacers.M} 5vw;
    position: fixed;
    width: 100%;
    top: ${({ isScrolled }) => (isScrolled ? "-150px" : 0)};
    z-index: 997;
    transition: ${Variables.Transitions.Bezier};
`

const Logo = styled(Link)`
    color: ${Variables.Colors.Font};
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Black};
    font-size: ${Variables.FontSizes.Nav};
    display: grid;

    span {
        font-weight: ${Variables.FontWeights.Regular};
    }
`

const Burger = styled.button`
    width: 30px;
    height: 20px;
    position: relative;
    cursor: pointer;
    z-index: 998;
    display: none;
    background: none;
    border: none;
    padding: 0;

    span {
        width: 100%;
        height: 2px;
        background-color: ${Variables.Colors.Font};
        border-radius: ${Variables.Radiuses.Round};
        position: absolute;
        left: 0;
        transition: ${Variables.Transitions.Short};

        &:first-child {
            top: ${({ isOpen }) => (isOpen ? "9px" : 0)};
            transform: ${({ isOpen }) => isOpen && "rotate(45deg)"};
        }

        &:nth-child(2) {
            top: calc(50% - 2px / 2);
            width: ${({ isOpen }) => isOpen && 0};
        }

        &:last-child {
            bottom: ${({ isOpen }) => (isOpen ? "9px" : 0)};
            transform: ${({ isOpen }) => isOpen && "rotate(-45deg)"};
        }
    }

    @media ${Variables.Breakpoints.Mobile} {
        display: block;
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${Variables.Spacers.M};

    @media ${Variables.Breakpoints.Mobile} {
        position: fixed;
        top: 0;
        left: ${({ isOpen }) => (isOpen ? 0 : "-100%")};
        width: 100vw;
        height: 100vh;
        background-color: ${Variables.Colors.Background};
        justify-content: center;
        flex-direction: column;
        transition: ${Variables.Transitions.Long};
        transition-timing-function: ${Variables.Transitions.Bezier};

        .button-delay-1,
        .button-delay-2,
        .button-delay-3 {
            opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
            transform: ${({ isOpen }) =>
                isOpen
                    ? "translateX(0)"
                    : `translateX(calc(${Variables.Spacers.XS} * -1))`};
            transition: ${Variables.Transitions.Short};
        }
    }
`

export { Container, Logo, Burger, Nav }
