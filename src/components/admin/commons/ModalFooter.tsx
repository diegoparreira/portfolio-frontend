import ModernButton from './ModernButton';

interface ModalFooterProps {
  onCancel?: () => void;
}

const ModalFooter: React.FC<ModalFooterProps> = ({ onCancel }) => {
  return (
    <div className="d-flex justify-content-center gap-5 align-items-center">
      <ModernButton size="lg" icon="check" submit />
      <ModernButton onClick={onCancel} size="lg" icon="cancel" />
    </div>
  );
};

export default ModalFooter;
