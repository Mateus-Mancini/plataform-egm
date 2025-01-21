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
        background: linear-gradient(135deg, #E4E6F2, #BABFDE);
        width: calc(100vw - 2.4rem);
        height: calc(100vh - 2.4rem);
        display: flex;
        gap: 4.8rem;
        padding-right: 4.8rem;
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
        padding-top: 10rem;
        padding-bottom: 2.4rem;
        position: relative;
        min-width: 0;
    `
)

export const SelectedStudentContainer = styled.div<ISelectedStudentContainerProps>(
    ({ initialPosition, closed }) => css`
        position: absolute;
        top: ${initialPosition.top - 10}px;
        left: ${initialPosition.left - 10}px;
        width: ${initialPosition.width + 1}px;
        height: ${initialPosition.height + 2}px;
        border: 0.4rem #040D2F dashed;
        color: #040D2F;
        border-radius: 0.4rem;
        background-color: #DEE0EE;
        animation: 1s ${closed ? 'close' :  'open'} both 0.2s;
        padding: 4.8rem;
        box-sizing: border-box;
        box-shadow: 0 0 8px rgba(50, 52, 132, 0.1), inset 0 0 8px rgba(50, 52, 132, 0.1);

        @keyframes
        open {
            to {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: calc(100vw - 4.8rem);
                height: calc(100vh - 4.8rem);
                border: 0 #040D2F dashed;
                border-radius: 0;
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
                border: 0 #040D2F dashed;
                border-radius: 0;
            }
            to {
                top: ${initialPosition.top - 10}px;
                left: ${initialPosition.left - 10}px;
                width: ${initialPosition.width}px;
                height: ${initialPosition.height + 2}px;
                border: 0 #040D2F dashed;
                border-radius: 0.4rem;
                box-shadow: inset 0 0 8px rgba(50, 52, 132, 0.1);
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
        color: #040D2F;
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