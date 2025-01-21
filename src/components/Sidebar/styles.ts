import styled, { css } from "styled-components";

interface IPageTag {
    selected?: boolean
}

export const SidebarContainer = styled.div(
    () => css`
        height: calc(100vh - 2.4rem);        
        width: fit-content;
        background: linear-gradient(-135deg, #4550BA, #39429A);
        padding: 4.8rem 1.6rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        justify-items: center;
        box-shadow: 0 0 8px rgba(50, 52, 132, 0.1), inset 0 0 8px rgba(50, 52, 132, 0.1);

        * {
            height: fit-content;
        }
    `
)

export const Title = styled.h1(
    () => css`
        font-size: 4.2rem;
        font-weight: 600;
        color: #EFFCF9;
    `
)

export const Date = styled.h1(
    () => css`
        font-size: 2rem;
        font-weight: 600;
        color: #EFFCF9;
        margin-bottom: 2.4rem;
    `
)

export const PagesContainer = styled.div(
    () => css`
        padding: 1.6rem 0 0 0; 
        width: 100%;
        display: grid;
        gap: 2.4rem;
    `
)

export const PageTag = styled.div<IPageTag>(
    ({ selected }) => css`
        background-color: ${selected ? '#505DE0' : '#606AD1'};
        padding: 1.2rem;
        border-radius: 0.8rem;
        font-size: 2rem;
        font-weight: 500;
        color: #EFFCF9;
        transition: 0.25s cubic-bezier(.175,.885,.32,1.3);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.6rem;

        &:hover {
            letter-spacing: 0.2rem;
            background-color: ${selected ? '#505DE0' : '#5863D8'};
        }

        span {
            font-size: 2.4rem;
        }
    `
)