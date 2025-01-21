import styled, { css } from "styled-components";

interface IDropdownContainer {
    isOpen: boolean
}

export const DropdownContainer = styled.div<IDropdownContainer>(
    ({ isOpen }) => css`
        flex: 1;
        padding: 1.2rem;
        background-color: #DEE0EE;
        color: #606AD1DE;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        border-radius: 0.4rem;
        min-width: 0;
        box-shadow: 0 0 8px rgba(50, 52, 132, 0.1), inset 0 0 8px rgba(50, 52, 132, 0.1);

        span {
            transform: rotate(${!isOpen ? '180deg' : '0'});
        }
    `
)

export const Options = styled.div(
    () => css`
        position: absolute;
        top: 120%;
        left: 0;
        width: 100%;
        background-color: #DEE0EE;
        display: grid;
        gap: 0.8rem;
        padding: 1.6rem;
        border-radius: 0.8rem;
        max-height: 40rem;
        overflow-y: auto;
        scrollbar-width: thin;
        box-shadow: 0 0 8px rgba(50, 52, 132, 0.1), inset 0 0 8px rgba(50, 52, 132, 0.1);
        scrollbar-color: #606AD1DE #DEE0EE;    
        z-index: 1;
    `
)

export const Option = styled.div(
    () => css`
        border-radius: 0.8rem;
        color: #606AD1DE;
        padding: 1.2rem;
        cursor: pointer;

        overflow: hidden;
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover {
            background-color: #606AD122;
        }
    `
)