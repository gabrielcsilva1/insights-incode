import { Container, Form, Header, InsightsCardsContainer, PlusIcon, Text } from "./styled";
// import { useTheme } from "styled-components";

import lightbullImg from '@/assets/lightbulb.svg';
import { insights } from '@/utils/data';

import { InsightCard } from "@/components/InsightCard";


export default function LandingPage(){
    // const { COLORS } = useTheme();
    return (
        <Container>
            <Header>
                <img src={lightbullImg} alt="desenho do logo, uma lanterna com contorno amarelo e a base branca" />

                <h1>Insights</h1>
            </Header>

            <Text>Descreva seu insight:</Text>
            <Form>
                <input type="text" />
                <button><PlusIcon/></button>
            </Form>

            <Text>Lista dos seus insights:</Text>
            <InsightsCardsContainer>
                {insights.map((value) => {
                    return (
                        <InsightCard label={value.label} date={value.date} $bgColor={value.color}/>   
                    )
                })}
            </InsightsCardsContainer>
        </Container>
    )
}