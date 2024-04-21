import { useTheme } from "styled-components";
import {
  ModalContent,
  InsightCardContainer,
  InsightsDate,
  InsightsLabel,
  Overlay,
} from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { PencilLine, Trash, X } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";

type InsightCardProps = {
  label: string;
  date: string;
  $bgColor: string;

  onDelete: () => void;
  onUpdate: (label: string, newLabel: string) => void;
};

export function InsightCard({
  label,
  date,
  $bgColor,
  onDelete,
  onUpdate,
}: InsightCardProps) {
  const { COLORS } = useTheme();
  const [modalInsigth, setModalInsigth] = useState(label);

  function handleOnChangeText(event: ChangeEvent<HTMLTextAreaElement>) {
    setModalInsigth(event.target.value);
  }

  return (
    <Dialog.Root
      onOpenChange={(isOpen) => (isOpen ? "" : setModalInsigth(label))}
    >
      <Dialog.Trigger asChild>
        <InsightCardContainer $bgColor={$bgColor}>
          <InsightsLabel>{label}</InsightsLabel>

          <InsightsDate>{date}</InsightsDate>
        </InsightCardContainer>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay $bgColor={$bgColor} />
        <ModalContent>
          <textarea
            id="modal-insight"
            name="modal-insight"
            value={modalInsigth}
            onChange={handleOnChangeText}
          />
          <InsightsDate>{date}</InsightsDate>
          <button className="delete-btn" onClick={onDelete}>
            <Trash color={COLORS.WHITE} size={52} />
          </button>

          <button
            className="edit-btn"
            type="button"
            onClick={() => {
              onUpdate(label, modalInsigth);
            }}
          >
            <PencilLine color={COLORS.WHITE} size={52} />
          </button>

          <Dialog.Close asChild>
            <button className="close-btn" autoFocus>
              <X color={COLORS.WHITE} size={52} />
            </button>
          </Dialog.Close>
        </ModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
