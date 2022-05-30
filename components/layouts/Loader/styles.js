// Imports
import styled, { keyframes } from "styled-components"

import Variables from "../../styles/Variables"

const Loading = keyframes`
    0% {
        opacity: 1;
        width: 100%;
        height: 100vh;
    }

    80% {
        opacity: 1;
        width: 100%;
        height: 100vh;
    }

    99% {
        opacity: 0;
        width: 100%;
        height: 100vh;
    }

    100% {
        width: 0;
        height: 0;
    }
`

const Swing = keyframes`
    50% {
        transform: rotate(-3deg);
    }
`

const SteamLarge = keyframes`
    0% {
        stroke-dashoffset: 13;
        opacity: 0.6;
    }

    100% {
        stroke-dashoffset: 39;
        opacity: 0;
    }
`

const SteamSmall = keyframes`
    10% {
        stroke-dashoffset: 9;
        opacity: 0.6;
    }

    80% {
        stroke-dashoffset: 27;
        opacity: 0;
    }

    100% {
        stroke-dashoffset: 27;
        opacity: 0;
    }
`

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: 9999;
    background-color: ${Variables.Colors.DarkBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    animation: ${Loading} 3s;
    animation-iteration-count: 1;
    animation-direction: normal;
    opacity: 0;
`

const Tea = styled.svg`
    stroke: ${Variables.Colors.White};

    #teabag {
        transform-origin: top center;
        transform: rotate(3deg);
        animation: ${Swing} 3s infinite;
        fill: ${Variables.Colors.White};
        stroke: none;
    }

    #steamL {
        stroke-dasharray: 13;
        stroke-dashoffset: 13;
        animation: ${SteamLarge} 3s infinite;
    }

    #steamR {
        stroke-dasharray: 9;
        stroke-dashoffset: 9;
        animation: ${SteamSmall} 3s infinite;
    }
`

const Teabag = styled.path`
    transform-origin: top center;
    transform: rotate(3deg);
    fill: #000;
    stroke: none;
`

const SteamL = styled.path`
    stroke-dasharray: 13;
    stroke-dashoffset: 13;
`

const SteamR = styled.path`
    stroke-dasharray: 9;
    stroke-dashoffset: 9;
`

export { Container, Tea, Teabag, SteamL, SteamR }
