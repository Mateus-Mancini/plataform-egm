import styled, { css } from "styled-components";

interface  ISelectedStudentContainerProps {
    initialPosition: {
        top: number
        left: number
        width: number
        height: number
    }

    closed: boolean
}

interface  ISelectedStudentInfoProps {
    index: number
    closed: boolean
}

export const AppContainer = styled.div(
    () => css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    `
)


export const PageContainer = styled.div(
    () => css`
        background-color: #E4E6F2;
        width: calc(100vw - 2.4rem);
        height: calc(100vh - 2.4rem);
        padding: 2.4rem;
        border-radius: 0.4rem;
        display: flex;
        gap: 2.4rem;
        overflow: hidden;
        box-sizing: border-box;
        position: relative;
    `
)

export const SidebarAndDate = styled.div(
    () => css`
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        flex: 0.3;
    `
)

export const PagesContainer = styled.div(
    () => css`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        position: relative;
        min-width: 0;
    `
)

export const DashedLine = styled.div(
    () => css`
        border-bottom: 4px dashed #323484;
        width: 100%;
    `
)

export const Filters = styled.div(
    () => css`
        display: flex;
        gap: 2.4rem;
        min-width: 0;
    `
)

export const StudentsContainer = styled.div(
    () => css`
        flex: 1;
        display: grid;
        gap: 4.8rem;
        grid-template-columns: repeat(5, 1fr);
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-color: #323484 #E4E6F2;
        padding-bottom: 2.4rem;
        box-sizing: border-box;
        max-width: 100%;
        align-items: start;

        &::after {
            content: '';
            position: absolute;
            min-width: 100%;
            height: 5%;
            bottom: 0;
            left: 0;
            background: linear-gradient(to bottom, #E4E6F200, #E4E6F2)
        }
    `
)

export const Student = styled.div(
    () => css`
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #C1CBFF;
        font-size: 1.8rem;
        text-align: center;
        cursor: pointer;
        border-radius: 0.4rem;
        padding: 1.6rem;
        box-sizing: border-box;
        transition: padding 0.25s, border 0.25s;
        border: 0 #323484 dashed;
        box-shadow: 0 0 #0000,0 0 #0000,inset 0 1px 4px 0 rgba(0, 0, 0, .05);

        &:hover {
            border: 0.4rem #323484 dashed;
            padding: 1.2rem;
        }
    `
)

export const SelectedStudentContainer = styled.div<ISelectedStudentContainerProps>(
    ({ initialPosition, closed }) => css`
        position: absolute;
        top: ${initialPosition.top - 10}px;
        left: ${initialPosition.left - 10}px;
        width: ${initialPosition.width + 1}px;
        height: ${initialPosition.height + 2}px;
        border: 0.4rem #323484 dashed;
        border-radius: 0.4rem;
        background-color: #C1CBFF;
        animation: 1s ${closed ? 'close' :  'open'} both 0.2s;
        padding: 4.8rem;
        box-sizing: border-box;
        box-shadow: 0 0 #0000,0 0 #0000,inset 0 1px 4px 0 rgba(0, 0, 0, .05);

        @keyframes
        open {
            to {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: calc(100vw - 4.8rem);
                height: calc(100vh - 4.8rem);
                border: 0 #323484 dashed;
            }
        }

        @keyframes
        close {
            from {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: calc(100vw - 4.8rem);
                height: calc(100vh - 4.8rem);
                border: 0 #323484 dashed;
            }
            to {
                top: ${initialPosition.top - 10}px;
                left: ${initialPosition.left - 10}px;
                width: ${initialPosition.width}px;
                height: ${initialPosition.height + 2}px;
                border: 0 #323484 dashed;
            }
        }
    `
)

export const SelectedStudentName = styled.h1<ISelectedStudentInfoProps>(
    ({ closed }) => css`
        animation: 0.5s reveal-text both 1.2s;
        opacity: 1;
        text-transform: capitalize;
        filter: blur(0);
        position: relative;
        top: 0;
        right: 0;
        margin-bottom: 1.6rem;

        ${closed && css`
            animation: 0.5s hide-text both;
        `}
    `
)

export const SelectedStudentInfo = styled.h2<ISelectedStudentInfoProps>(
    ({ index, closed }) => css`
        animation: 0.5s reveal-text both ${1.6 + 0.2 * index}s;
        opacity: 1;
        filter: blur(0);
        position: relative;
        top: 0;
        right: 0;
        margin-bottom: 0.8rem;

        ${closed && css`
            animation: 0.5s hide-text both;
        `}

        @keyframes
        reveal-text {
            from {
                opacity: 0;
                filter: blur(0.25rem);
                top: 1.4em;
                right: 1.4rem;
            }
        }

        @keyframes
        hide-text {
            to {
                opacity: 0;
                filter: blur(0.25rem);
            }
        }
    `
)

export const CloseButton = styled.span<ISelectedStudentInfoProps>(
    ({ index, closed }) => css`
        font-size: 3.6rem;
        position: absolute;
        top: 4.8rem;
        right: 4.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: 1s cubic-bezier(.175,.885,.32,1.3);
        color: #323484;
        animation: 0.25s reveal-button both ${1.6 + 0.2 * index}s;

        ${closed && css`
            animation: 0.25s hide-button both;
        `}

        &:hover {
            scale: 1.25;
        }

        @keyframes
        reveal-button {
            from {
                font-size: 0;
                top: 6.4rem;
                right: 6.4rem;
            }
        }

        @keyframes
        hide-button {
            to {
                font-size: 0;
                top: 6.4rem;
                right: 6.4rem;
            }
        }
    `
)