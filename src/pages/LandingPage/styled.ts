import styled, { css } from "styled-components";
import { Plus } from '@phosphor-icons/react';

export const Container = styled.div`
    max-width: 500px;
    margin: 11rem auto 1.6rem;

    @media (max-width: 640px) {
        max-width: none;
        margin: 11rem 3.2rem;
    }
`

export const Header = styled.header`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 1.2rem;
    justify-content: center;

    margin-bottom: 6.2rem;

    & > img {
        width: 6.4rem;
        height: 6.4rem;
    }

    & > h1 {
        font-size: 4.2rem;
        font-weight: bold;
    }
`

export const Text = styled.p`
    font-size: 1.8rem;
`

export const Form = styled.form`
    display: flex;
    gap: 2rem;

    background: ${({theme}) => theme.COLORS.GRAY_400};
    border-radius: 24px;
    padding: 2.7rem 2rem;
    margin: 0.8rem 0 4.4rem;

    & > input {
        flex: 1;
        padding: 0.8rem;

        ${({theme}) => css`
            background-color: ${theme.COLORS.GRAY_500};
            border: 1px solid ${theme.COLORS.GRAY_300};
            border-radius: 8px;
        `}
    }

    & > button {
        background-color: ${({theme}) => theme.COLORS.YELLOW};
        border: none;
        border-radius: 8px;
        cursor: pointer;
        padding: 0.7rem;

        line-height: 0;
        transition: opacity 0.3s;

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }

    @media (max-width: 640px) {
        gap: 1.2rem;
    }
`

export const PlusIcon = styled(Plus).attrs(({theme}) => ({
    size: 32,
    color: theme.COLORS.BLACK
}))``

export const InsightsCardsContainer = styled.div`
    display: grid;
    gap: 3.6rem;

    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 20rem;

    margin-top: 1rem;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
       
    }

    &:has(button:hover) button:not(:hover) {
        opacity: 0.6;
        scale: 0.98;
    }
`