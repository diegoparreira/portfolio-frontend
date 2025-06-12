import React from 'react';
import { Modal as RBModal } from 'react-bootstrap';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
}

const mapSize = (size: 'sm' | 'md' | 'lg' | 'xl' = 'xl') => {
    if (size === 'md') return undefined;
    return size;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, title, size = 'xl', children }) => {
    return (
        <RBModal show={show} onHide={onClose} centered size={mapSize(size)}>
            {title && (
                <RBModal.Header closeButton>
                    <RBModal.Title as="h4" className='w-100 text-center'><strong>{title}</strong></RBModal.Title>
                </RBModal.Header>
            )}
            <RBModal.Body>
                {children}
            </RBModal.Body>
        </RBModal>
    );
};

export default Modal;
