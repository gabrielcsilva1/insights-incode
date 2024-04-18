import { InsightCardContainer, InsightsDate, InsightsLabel } from "./style";

type InsightCardProps = {
    label: string,
    date: string,
    bgColor: string,
}

export function InsightCard({ label, date, bgColor }: InsightCardProps) {
    return (
        <InsightCardContainer bgColor={bgColor}>
            <InsightsLabel>{label}</InsightsLabel>

            <InsightsDate>{date}</InsightsDate>
        </InsightCardContainer>
    )
}