import styled from "styled-components";

type Props = {
    bgColor: string;
}

export const InsightCardContainer = styled.div<Props>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.85rem 1.6rem;
    overflow: hidden;

    background-color: ${({bgColor}) => bgColor};
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
    margin-top: 1rem;
`