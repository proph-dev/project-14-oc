import { ReactNode, useRef, useEffect } from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    showModal: boolean;
    modalClass?: string;
    blockerClass?: string;
    showClose?: boolean;
    closeText?: string;
    closeClass?: string;
    clickClose?: boolean;
    escapeClose?: boolean;
}

export const Modal = ({ children, onClose, showModal, modalClass, blockerClass, showClose, closeText, closeClass, clickClose, escapeClose }: ModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (clickClose && modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleEscapeKey = (event: KeyboardEvent) => {
            if (escapeClose && event.key === "Escape") {
              onClose();
            }
        };

        if (showModal) {
            document.addEventListener("mousedown", handleOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        }
        
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };

    }, [clickClose, escapeClose, onClose, showModal]);

    if(!showModal) {
        return null;
    }

    return (
        <div className={`${blockerClass} modal`}>
            <div ref={modalRef} className={ modalClass }>
                {children}

                {showClose && (
                    <button onClick={ onClose } className={ closeClass }>X</button>
                )}

                {closeText && !showClose && (
                    <button onClick={ onClose } className={ closeClass }>{ closeText }</button>
                )}
            </div>
        </div>
    );
};