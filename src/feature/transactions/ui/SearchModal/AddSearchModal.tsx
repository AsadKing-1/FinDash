import { SearchModal } from './SearchModal';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export function AddSearchModal({ open, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-xl p-6">
        <SearchModal />
      </div>
    </div>
  );
}