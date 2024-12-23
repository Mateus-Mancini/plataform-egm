import styled, { css } from "styled-components";

export const DateContainer = styled.div(
    () => css`
        flex: 1;
        background-color: #CCD3FF;
        border: 4px dashed #7D4DCC;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 0.8rem;
        box-shadow: 0px 1px 4px #0004;
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