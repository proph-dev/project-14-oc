import { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
    showModal: boolean;
}

export const Modal = ({ children, onClose, showModal }: ModalProps) => {
    if(!showModal) {
        return null;
    }

    return (
        <div className='modal'>
            <div className="modalContent">
                {children}

                <button onClick={ onClose }>Fermer</button>
            </div>
        </div>
    );
}