import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

type Props = {
    $bgColor: string;
}

export const InsightCardContainer = styled.button<Props>`
    all: unset;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.85rem 1.6rem;
    overflow: hidden;

    background-color: ${({$bgColor}) => $bgColor};

    transition: all 0.3s;
`

export const InsightsLabel = styled.p`
    font-size: 1.8rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

export const InsightsDate = styled.p`
    margin-top: 1rem;
    font-size: 1rem;
`

export const Overlay = styled(Dialog.Overlay)<Props>`
    position: fixed;
    inset: 0;

    background-color: ${({$bgColor}) => $bgColor};
`

export const ModalContent = styled(Dialog.Content)`
    position: fixed;
    inset: 0;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;

    & > textarea {
        border: none;
        border-radius: 6px;
        background-color: transparent;
        padding: 1.2rem;
        width: 67.2rem;
        text-align: center;
        margin: 0 1.2rem;

        font-size: 1.8rem;

        resize: none;

        &:hover {
            box-shadow: 0 0 0 2px ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    & > button {
        all: unset;
        position: fixed;
        line-height: 0;

        cursor: pointer;

        &[class="close-btn"] {
            top: 32px;
            right: 32px;
        }

        &[class="delete-btn"] {
            bottom: 79px;
            right: 73px;
        }

        &[class="edit-btn"] {
            bottom: 79px;
            left: 73px;
        }
    }
`