import { Container, Form, Header, InsightsCardsContainer, PlusIcon, Text } from "./styled";
import { useState, FormEvent, ChangeEvent } from "react";
// import { useTheme } from "styled-components";

import lightbullImg from '@/assets/lightbulb.svg';
import  data  from '@/utils/data';

import { InsightCard } from "@/components/InsightCard";
import { dateFormatter } from "@/utils/formatter";
import { getRandomColor } from "@/utils/get-random-collor";


export default function LandingPage(){
    // const { COLORS } = useTheme();
    const [insights, setInsights] = useState(data);
    const [currentInsight, setCurrentInsight] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Verifica se o insight já existe
        const insightAlreadyExists = insights.filter((insight) => insight.label === currentInsight).length > 0;

        if (currentInsight.trim() !== '' && !insightAlreadyExists){
            const date = dateFormatter.format(new Date());

            const data = {
                label: currentInsight,
                date,
                color: getRandomColor(insights.length)
            }
            setInsights(prev => [data, ...prev]);
            setCurrentInsight('');
        }
        else {
            alert("Insight já cadastrado ou inválido")
        }
    }

    function handleChangeEvent(event: ChangeEvent<HTMLInputElement>){
        setCurrentInsight(event.target.value);
    }

    return (
        <Container>
            <Header>
                <img src={lightbullImg} alt="desenho do logo, uma lanterna com contorno amarelo e a base branca" />

                <h1>Insights</h1>
            </Header>

            <Text>Descreva seu insight:</Text>
            <Form onSubmit={handleSubmit}>
                <input id="insight" type="text" name="insight" onChange={handleChangeEvent} value={currentInsight}/>
                <button type="submit"><PlusIcon/></button>
            </Form>

            <Text>Lista dos seus insights:</Text>
            <InsightsCardsContainer>
                {insights.map((value) => {
                    return (
                        <InsightCard key={value.label} label={value.label} date={value.date} $bgColor={value.color}/>   
                    )
                })}
            </InsightsCardsContainer>
        </Container>
    )
}