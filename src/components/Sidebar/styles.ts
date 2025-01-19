import styled, { css } from "styled-components";

interface IPageTag {
    selected?: boolean
}

export const SidebarContainer = styled.div(
    () => css`
        background-color: #323484;
        padding: 2.4rem 0;
        border-radius: 1.6rem;
        overflow: hidden;
        display: grid;
        width: 100%;
        gap: 0.8rem;
        justify-items: center;
        height: fit-content;
        box-shadow: 0 0 #0000,0 0 #0000,inset 0 1px 4px 0 rgba(0, 0, 0, .05);
    `
)

export const Title = styled.h1(
    () => css`
        font-weight: 600;
        color: #EFFCF9;
    `
)

export const DashedLine = styled.div(
    () => css`
        border-bottom: 4px dashed #E4E6F2;
        width: 100%;
    `
)

export const PagesContainer = styled.div(
    () => css`
        padding: 1.6rem 0 0 0; 
        width: 80%;
        display: grid;
        gap: 1.6rem;
    `
)

export const PageTag = styled.div<IPageTag>(
    ({ selected }) => css`
        background-color: ${selected ? '#5577F2' : '#5577F233'};
        padding: 1.6rem;
        border-radius: 3.2rem;
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
            background-color: ${selected ? '#5577F2' : '#5577F266'};
        }

        span {
            font-size: 2.4rem;
        }
    `
)