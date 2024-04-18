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
`

export const InsightsLabel = styled.p`
    font-size: 1.8rem;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`

export const InsightsDate = styled.p`
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
    align-items: center;
    justify-content: center;

    & > button {
        all: unset;
        position: fixed;
        line-height: 0;

        cursor: pointer;

        &[class="top-right"] {
            top: 32px;
            right: 32px;
        }

        &[class="bottom-right"] {
            bottom: 79px;
            right: 73px;
        }

        &[class="bottom-left"] {
            bottom: 79px;
            left: 73px;
        }
    }
`