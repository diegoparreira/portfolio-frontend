import ModernButton from "./ModernButton";

interface ModalFooterProps {
    onCancel?: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({
    onCancel
}) => {

    return (
        <div className="d-flex justify-content-center gap-5 align-items-center">
            <ModernButton
                onClick={onCancel}
                size="lg"
                icon="check"
            />
            <ModernButton
                onClick={onCancel}
                size="lg"
                icon="cancel"
            />
        </div>
    );
};

export default ModalFooter;

