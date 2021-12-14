import { FunctionComponent, useCallback, useEffect, useRef } from "react";
import { Headline } from '@typography';
import { Button } from "@molecules";
import {
  Overlay,
  ModalContainer,
  ButtonsContainer
} from './styles';
import useEnterClickOn from "@hooks/useEnterClickOn";

export interface GlobalModalProps {
  id: string;
  title?: string;
  confirmTitle?: string;
  cancelTitle?: string;
  open?: boolean;
  onConfirm?: () => void;
  onCancel?: () => void;
  isConfirmButtonDisabled?: boolean;
}

const GlobalModal: FunctionComponent<GlobalModalProps> = ({
  id,
  isConfirmButtonDisabled = false,
  title,
  confirmTitle = 'Підтвердити',
  cancelTitle = 'Скасувати',
  open,
  onConfirm = () => {},
  onCancel = () => {},
  children
}) => {

  // const dispatchKeyEvent =
  //  (e: KeyboardEvent) => { 
  //   if (open) {
  //     if (e.key === 'Escape') {
  //       onCancel();
  //     }
  //     if (e.key === 'Enter') {
  //       onConfirm();
  //     }
  //   }
  // };

  // useEffect(
  //   () => {
  //     document.addEventListener('keydown', dispatchKeyEvent);

  //     return () => {
  //       document.removeEventListener('keypress', dispatchKeyEvent);
  //     }
  //   }
  // );

  return (
    <Overlay key={id} open={open}>
      <ModalContainer>
        {title ? <Headline type={3} color="black">{title}</Headline> : null}
        {children}
      <ButtonsContainer>
        <Button
          disabled={isConfirmButtonDisabled}
          type={1}
          padding="15px 30px"
          onClick={() => {
            onConfirm();
          }}
        >
          {confirmTitle}
        </Button>
        <Button
          type={2}
          padding="15px 30px"
          onClick={onCancel}
        >
          {cancelTitle}
        </Button>
      </ButtonsContainer>
      </ModalContainer>
    </Overlay>
  );
};

export default GlobalModal;