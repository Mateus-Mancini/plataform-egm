import styled, { css } from "styled-components";

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
        border-radius: 0.8rem;
        display: flex;
        gap: 2.4rem;
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
