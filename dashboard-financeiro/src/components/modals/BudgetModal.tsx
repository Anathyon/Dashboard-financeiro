// src/components/modals/BudgetModal.tsx
import React from 'react';

interface BudgetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BudgetModal: React.FC<BudgetModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 rounded-xl shadow-2xl text-white w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
        style={{ 
          padding: '2rem',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h3 className="text-2xl font-bold" style={{ marginBottom: '1rem' }}>
          Definir Orçamento (Meta)
        </h3>
        <p className="text-gray-400" style={{ marginBottom: '1.5rem' }}>
          Crie um objetivo financeiro e defina a quantia alocada.
        </p>

        {/* Placeholder do Formulário */}
        <div 
            className="flex flex-col" 
            style={{ gap: '1rem' }}
        >
            <input 
                type="text" 
                placeholder="Nome do Orçamento (Ex: Férias, Reserva de Emergência)"
                className="w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                style={{ padding: '0.75rem' }}
            />
            <input 
                type="number" 
                placeholder="Quantia Alocada (R$)"
                className="w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-blue-500"
                style={{ padding: '0.75rem' }}
            />
        </div>

        {/* Botões de Ação */}
        <div 
            className="flex justify-end" 
            style={{ marginTop: '1.5rem', gap: '0.75rem' }}
        >
          <button 
            className="bg-gray-600 rounded-lg hover:bg-gray-500 transition"
            style={{ padding: '0.5rem 1rem' }}
            onClick={onClose}
          >
            Cancelar
          </button>
          <button 
            className="bg-blue-600 rounded-lg hover:bg-blue-700 font-semibold transition"
            style={{ padding: '0.5rem 1rem' }}
            onClick={() => { alert('Orçamento Criado (Placeholder)'); onClose(); }}
          >
            Salvar Objetivo
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;