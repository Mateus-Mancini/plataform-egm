import styled, { css } from "styled-components";

export const PageContainer = styled.div(
    () => css`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        padding-top: 1.6rem;
        overflow: hidden;
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
        scrollbar-width: none;
        padding-bottom: 2.4rem;
        box-sizing: border-box;
        max-width: 100%;
        align-items: start;
        mask: linear-gradient(#000 90%, #0000);
    `
)

export const Student = styled.div(
    () => css`
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #DEE0EE;
        font-size: 1.8rem;
        text-align: center;
        cursor: pointer;
        border-radius: 0.4rem;
        padding: 1.6rem;
        box-sizing: border-box;
        transition: padding 0.25s, border 0.25s;
        border: 0 #040D2F dashed;
        color: #040D2F;
        box-shadow: 0 0 8px rgba(50, 52, 132, 0.1), inset 0 0 8px rgba(50, 52, 132, 0.1);

        &:hover {
            border: 0.4rem #040D2F dashed;
            padding: 1.2rem;
        }
    `
)