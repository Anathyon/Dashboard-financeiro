// src/components/AccessModal.tsx
import React from 'react';
import { LogIn, UserPlus, Eye, X } from 'lucide-react';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void; 
  onCreateAccountClick: () => void;
  onVisitorModeClick: () => void;
}

const AccessModal: React.FC<AccessModalProps> = ({ 
  isOpen, 
  onClose,
  onLoginClick,
  onCreateAccountClick,
  onVisitorModeClick
}) => {
  if (!isOpen) return null;

  return (
    // 1. Overlay de Fundo
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      
      {/* 2. Caixa do Modal (Conteúdo) */}
      <div 
        className="bg-gray-800 rounded-xl text-white shadow-2xl transform transition-all duration-300 ease-out relative"
        style={{ width: '90%', maxWidth: '25rem', padding: '2rem' }} 
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Botão de Fechar */}
        <button
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition duration-150"
            onClick={onClose}
            aria-label="Fechar"
        >
            <X style={{ width: '1.25rem', height: '1.25rem' }} /> {/* 20px = 1.25rem */}
        </button>

        {/* Título */}
        <h2 
          className="text-xl font-bold text-center"
          style={{ marginBottom: '1rem' }} // 16px = 1rem
        >
          Bem-vindo ao Dashboard
        </h2>
        
        {/* Subtítulo/Descrição */}
        <p 
          className="text-gray-400 text-center text-sm"
          style={{ marginBottom: '1.5rem' }} // 24px = 1.5rem
        >
          Escolha como deseja acessar sua gestão financeira.
        </p>

        {/* Container das Opções/Botões */}
        <div 
          className="flex flex-col"
          style={{ rowGap: '1rem' }} // 16px = 1rem
        >
          {/* Opções */}
          <button
            onClick={onLoginClick}
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition duration-150 border-2 border-gray-600"
            style={{ padding: '0.75rem 1.25rem', columnGap: '0.75rem' }} // 12px=0.75rem, 20px=1.25rem
          >
            <LogIn style={{ width: '1.25rem', height: '1.25rem', color: '#3B82F6' }} /> 
            Fazer Login
          </button>

          <button
            onClick={onCreateAccountClick}
            className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition duration-150 border-2 border-gray-600"
            style={{ padding: '0.75rem 1.25rem', columnGap: '0.75rem' }}
          >
            <UserPlus style={{ width: '1.25rem', height: '1.25rem', color: '#10B981' }} />
            Criar Conta
          </button>
          
          <button
            onClick={onVisitorModeClick}
            className="flex items-center justify-center bg-gray-900 hover:bg-gray-700 rounded-lg font-semibold transition duration-150 border-2 border-gray-900 text-gray-400"
            style={{ padding: '0.75rem 1.25rem', columnGap: '0.75rem', marginTop: '0.5rem' }} // 8px = 0.5rem
          >
            <Eye style={{ width: '1.25rem', height: '1.25rem' }} />
            Continuar como Visitante
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessModal;