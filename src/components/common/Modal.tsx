import React from 'react';

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: React.ReactNode;
}

const sizeClass = {
    sm: 'modal-sm',
    md: '',
    lg: 'modal-lg',
    xl: 'modal-xl',
};

const Modal: React.FC<ModalProps> = ({ show, onClose, title, size = 'xl', children }) => {
    if (!show) return null;
    return (
        <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex={-1} role="dialog">
            <div className={`modal-dialog modal-dialog-centered ${sizeClass[size]}`} role="document">
                <div className="modal-content">
                    <div className="modal-header" style={{ borderStyle: 'none' }}>
                        {title && <h4 className="modal-title"><strong>{title}</strong></h4>}
                        <button className="btn-close" type="button" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
