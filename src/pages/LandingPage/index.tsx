import { InsightCard } from "@/components/InsightCard";
import { Container, Form, Header, InsightsCardsContainer, PlusIcon, Text } from "./styled";
import lightbullImg from '@/assets/lightbulb.svg';
import { useTheme } from "styled-components";


export default function LandingPage(){
    const { COLORS } = useTheme();
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
                <InsightCard 
                    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    date="29 / dez /2022"
                    bgColor={COLORS.RED}
                    
                />
                <InsightCard 
                    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    date="29 / dez /2022"
                    bgColor={COLORS.YELLOW}
                    
                />
                <InsightCard 
                    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    date="29 / dez /2022"
                    bgColor={COLORS.BLUE}
                    
                />
                <InsightCard 
                    label="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    date="29 / dez /2022"
                    bgColor={COLORS.PINK}
                    
                />
            </InsightsCardsContainer>
        </Container>
    )
}