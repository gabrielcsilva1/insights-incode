import { Container, Form, Header, InsightsCardsContainer, PlusIcon, Text } from "./styled";
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
// import { useTheme } from "styled-components";

import lightbullImg from '@/assets/lightbulb.svg';

import { dateFormatter } from "@/utils/formatter";
import { getRandomColor } from "@/utils/get-random-collor";

import { InsightCard } from "@/components/InsightCard";

const LOCAL_STORAGE_KEY = "@insights-incode:insights";
type IInsight = {
    label: string,
    date: string,
    color: string
}

export default function LandingPage(){
    // const { COLORS } = useTheme();
    const [insights, setInsights] = useState<IInsight[]>([]);
    const [currentInsight, setCurrentInsight] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Verifica se o insight já existe
        const insightAlreadyExists = insights.filter((insight) => insight.label === currentInsight).length > 0;
        const label = currentInsight.trim()

        if (label !== '' && !insightAlreadyExists){
            const date = dateFormatter.format(new Date());

            const data = {
                label,
                date,
                color: getRandomColor(insights.length)
            }
            setInsights(prev => [data, ...prev]);
            setCurrentInsight('');
            // alert("Insight criado!")
        }
        else {
            alert("Insight já cadastrado ou inválido")
        }
    }

    function handleChangeEvent(event: ChangeEvent<HTMLInputElement>){
        setCurrentInsight(event.target.value);
    }

    function handleDeleteInsight(label: string){
        setInsights(prev => prev.filter((insight) => {
            return insight.label !== label
        }))

        // alert("Insight removido!")
    }

    function handleUpdateInsight(prevLabel: string, newLabel: string){
        const newLabelAlreadyExists = insights.find((insight) => insight.label === newLabel);
        

        if ( newLabel.trim() !== '' && !newLabelAlreadyExists){
            setInsights(prev => prev.map((insight) => {
                if (insight.label === prevLabel) {
                    return {...insight, label: newLabel.trim() }
                }

                return insight;
            }))

            // alert("Insight atualizado!")
        }
        else {
            alert("Insight já cadastrado ou inválido")
        }
    }

    useEffect(() => {
        const localInsights = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localInsights !== null) {
            setInsights(JSON.parse(localInsights))
        }
    }, [])

    useEffect(() => {
        if (insights.length > 0){
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(insights))
        }
        else {
            localStorage.removeItem(LOCAL_STORAGE_KEY)
        }

        console.log(insights)
    }, [insights])

    return (
        <Container>
            <Header>
                <img src={lightbullImg} alt="desenho do logo, uma lanterna com contorno amarelo e a base branca" />

                <h1>Insights</h1>
            </Header>

            <Text>Descreva seu insight:</Text>
            <Form onSubmit={handleSubmit}>
                <input id="insight" type="text" name="insight" onChange={handleChangeEvent} value={currentInsight}/>
                <button type="submit" disabled={currentInsight.length === 0}><PlusIcon/></button>
            </Form>

            <Text>Lista dos seus insights:</Text>
            <InsightsCardsContainer>
                {insights.map((value) => {
                    return (
                        <InsightCard 
                        key={value.label} 
                        label={value.label} 
                        date={value.date} 
                        $bgColor={value.color}
                        onDelete={() => handleDeleteInsight(value.label)}
                        onUpdate={handleUpdateInsight}
                        />   
                    )
                })}
            </InsightsCardsContainer>
        </Container>
    )
}