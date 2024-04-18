import { useTheme } from "styled-components";
import { ModalContent, InsightCardContainer, InsightsDate, InsightsLabel, Overlay } from "./style";
import * as Dialog from '@radix-ui/react-dialog';
import { PencilLine, Trash, X } from "@phosphor-icons/react";

type InsightCardProps = {
    label: string,
    date: string,
    $bgColor: string,
}

export function InsightCard({ label, date, $bgColor }: InsightCardProps) {
    const { COLORS } = useTheme();

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <InsightCardContainer $bgColor={$bgColor}>
                    <InsightsLabel>{label}</InsightsLabel>

                    <InsightsDate>{date}</InsightsDate>
                </InsightCardContainer>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Overlay $bgColor={$bgColor}/>
                <ModalContent>
                    {label}
                    
                    <button className="bottom-right">
                        <Trash color={COLORS.WHITE} size={52}/>
                    </button>

                    <button className="bottom-left">
                        <PencilLine color={COLORS.WHITE} size={52}/>
                    </button>

                    <Dialog.Close asChild>
                        <button className="top-right">
                            <X color={COLORS.WHITE} size={52}/>
                        </button>
                    </Dialog.Close>
                </ModalContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}