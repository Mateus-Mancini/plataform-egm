import styled, { css } from "styled-components";

export const SearchContainer = styled.input(
    () => css`
        flex: 1;
        padding: 1.2rem;
        border: none;
        outline: none;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        border-radius: 0.4rem;
        background: url("./search.svg") no-repeat;
        background-position: 95% center;
        background-size: 2.4rem;
        background-color: #DEE0EE;
        color: #606AD1DE;
        box-shadow: 0 0 8px rgba(50, 52, 132, 0.1), inset 0 0 8px rgba(50, 52, 132, 0.1);

        &::placeholder {
            color: #606AD1DE;
            font-size: 2.4rem;
        }
    `
)