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
        box-shadow: 0px 1px 4px #0004;
    `
)

export const Title = styled.h1(
    () => css`
        font-size: 3.6rem;
        font-family: "League Spartan";
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
        background-color: ${selected ? '#7D4DCC' : '#7D4DCC33'};
        padding: 1.6rem;
        border-radius: 3.2rem;
        font-size: 2rem;
        font-weight: 500;
        font-family: "League Spartan";
        color: #EFFCF9;
        transition: 0.25s;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.6rem;

        &:hover {
            letter-spacing: 0.2rem;
            background-color: ${selected ? '#7D4DCC' : '#7D4DCC66'};
        }

        span {
            font-size: 2.4rem;
        }
    `
)