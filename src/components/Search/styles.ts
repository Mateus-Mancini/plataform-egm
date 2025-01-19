import styled, { css } from "styled-components";

export const SearchContainer = styled.input(
    () => css`
        flex: 2;
        padding: 1.6rem;
        background-color: #d8dcf9 !important;
        border: none;
        outline: none;
        color: #8B8DBB;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        border-radius: 1.6rem;
        background: url("./search.svg") no-repeat;
        background-position: 95% center;
        background-size: 2.4rem;
        box-shadow: 0 0 #0000,0 0 #0000,inset 0 1px 4px 0 rgba(0, 0, 0, .05);


        &::placeholder {
            color: #8B8DBB;
            font-size: 2.4rem;
        }
    `
)