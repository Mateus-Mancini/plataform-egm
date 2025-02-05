import styled, { css } from "styled-components";

export const DateContainer = styled.div(
    () => css`
        flex: 1;
        background-color: #CCD3FF;
        border: 4px dashed #5577F2;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.8rem;
        box-shadow: 0 0 8px rgba(50, 52, 132, 0.1), inset 0 0 8px rgba(50, 52, 132, 0.1);
    `
)

export const Day = styled.h1(
    () => css`
        font-size: 9.6rem;
        color: #323484;
        font-weight: 500;
    `
)

export const MonthAndYear = styled.h1(
    () => css`
        font-size: 2.4rem;
        font-weight: 500;
    `
)