// src/components/modals/ManagerModal.tsx
import React from 'react';

interface ManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ManagerModal: React.FC<ManagerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-xl shadow-2xl text-white w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ 
          padding: '2rem',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h3 className="text-2xl font-bold" style={{ marginBottom: '1rem' }}>
          Gerenciar Lançamentos
        </h3>
        <p className="text-gray-400" style={{ marginBottom: '1.5rem' }}>
          Edite ou exclua transações e orçamentos existentes.
        </p>

        {/* Placeholder do Conteúdo */}
        <div 
            className="h-64 overflow-y-auto bg-gray-700 rounded-lg text-gray-300 flex items-center justify-center"
            style={{ padding: '1rem' }}
        >
            [ Placeholder: Lista de Transações e Orçamentos para Edição/Exclusão ]
        </div>

        {/* Botões de Fechamento */}
        <div 
            className="flex justify-end"
            style={{ marginTop: '1.5rem' }}
        >
          <button 
            className="bg-gray-600 rounded-lg hover:bg-gray-500 transition font-semibold"
            style={{ padding: '0.5rem 1rem' }}
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagerModal;