import styled, { css } from "styled-components";

interface IDropdownContainer {
    isOpen: boolean
}

export const DropdownContainer = styled.div<IDropdownContainer>(
    ({ isOpen }) => css`
        flex: 1;
        padding: 1.6rem;
        background-color: #d8dcf9;
        color: #8B8DBB;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        border-radius: 1.6rem;
        min-width: 0;
        box-shadow: 0 0 #0000,0 0 #0000,inset 0 1px 4px 0 rgba(0, 0, 0, .05);

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
        background-color: #d8dcf9;
        display: grid;
        gap: 0.8rem;
        padding: 1.6rem;
        border-radius: 1.6rem;
        max-height: 40rem;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-width: thin;
        scrollbar-color: #8B8DBB #d8dcf9;    
    `
)

export const Option = styled.div(
    () => css`
        border-radius: 1.6rem;
        color: #8B8DBB;
        padding: 1.6rem;
        cursor: pointer;

        overflow: hidden;
        flex: 1;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:hover {
            background-color: #8B8DBB20;
        }
    `
)