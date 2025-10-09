// src/components/modals/TransactionModal.tsx
import React from 'react';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose }) => {
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
          padding: '2rem', // substitui p-6/p-8
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h3 className="text-2xl font-bold" style={{ marginBottom: '1rem' }}>
          Registrar Transação
        </h3>
        <p className="text-gray-400" style={{ marginBottom: '1.5rem' }}>
          Adicione um lucro (Receita) ou prejuízo (Despesa).
        </p>

        {/* Placeholder do Formulário */}
        <div 
            className="flex flex-col" 
            style={{ gap: '1rem' }} // substitui space-y-4
        >
            <div className="bg-gray-700 rounded-lg text-gray-300" style={{ padding: '1rem' }}>
                [ Seleção de Categoria: Lucro / Prejuízo ]
            </div>
            <input 
                type="number" 
                placeholder="Quantia (R$)"
                className="w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-green-500"
                style={{ padding: '0.75rem' }} // substitui p-3
            />
        </div>

        {/* Botões de Ação */}
        <div 
            className="flex justify-end" 
            style={{ marginTop: '1.5rem', gap: '0.75rem' }} // substitui mt-6 e space-x-3
        >
          <button 
            className="bg-gray-600 rounded-lg hover:bg-gray-500 transition"
            style={{ padding: '0.5rem 1rem' }} // substitui px-4 py-2
            onClick={onClose}
          >
            Cancelar
          </button>
          <button 
            className="bg-green-600 rounded-lg hover:bg-green-700 font-semibold transition"
            style={{ padding: '0.5rem 1rem' }}
            onClick={() => { alert('Transação Salva (Placeholder)'); onClose(); }}
          >
            Salvar Alteração
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;