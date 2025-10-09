// src/components/ActionButtons.tsx
import React, { useState } from 'react';
import { PlusCircle, Target, ListChecks } from 'lucide-react';

// Importe os novos modais
import TransactionModal from './modals/TransactionModal';
import BudgetModal from './modals/BudgetModal';
import ManagerModal from './modals/ManagerModal';

const ActionButtons: React.FC = () => {
  // Estado para controlar a abertura dos modais
  const [isTransactionModalOpen, setTransactionModalOpen] = useState(false);
  const [isBudgetModalOpen, setBudgetModalOpen] = useState(false);
  const [isManagerModalOpen, setManagerModalOpen] = useState(false);

  const buttons = [
    {
      label: 'Registrar Transação',
      description: 'Adicionar lucro ou prejuízo',
      icon: PlusCircle,
      onClick: () => setTransactionModalOpen(true),
      // Estilo Customizado
      borderColor: '#10B981', // Verde
      textColor: '#10B981',
      iconBg: '#10B981',
      hoverShadow: '0 0 15px rgba(16, 185, 129, 0.4)', // Sombra verde
    },
    {
      label: 'Definir Orçamento',
      description: 'Planejar objetivos financeiros',
      icon: Target,
      onClick: () => setBudgetModalOpen(true),
      // Estilo Customizado
      borderColor: '#3B82F6', // Azul
      textColor: '#3B82F6',
      iconBg: '#3B82F6',
      hoverShadow: '0 0 15px rgba(59, 130, 246, 0.4)', // Sombra azul
    },
    {
      label: 'Gerenciar Lançamentos',
      description: 'Editar ou apagar transações/orçamentos',
      icon: ListChecks,
      onClick: () => setManagerModalOpen(true),
      // Estilo Customizado
      borderColor: '#F59E0B', // Amarelo/Laranja
      textColor: '#F59E0B',
      iconBg: '#F59E0B',
      hoverShadow: '0 0 15px rgba(245, 158, 11, 0.4)', // Sombra amarela
    },
  ];

  return (
    <>
      <div 
        className="grid sm:grid-cols-1 md:grid-cols-3"
        // Estilos de espaçamento feitos com style
        style={{ gap: '1rem', marginBottom: '2rem' }}
      >
        {buttons.map((button) => {
          const Icon = button.icon;
          return (
            <button
              key={button.label}
              className={`flex items-center rounded-xl shadow-lg transition duration-200 bg-gray-900`}
              onClick={button.onClick}
              style={{
                padding: '1.25rem', // p-4
                backgroundColor: '#1D2027', // Fundo escuro sutil
                border: `2px solid ${button.borderColor}`,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Sombra base
              }}
              // Adiciona o efeito de hover/sombra com um pouco de CSS in-line
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 4px 15px rgba(0, 0, 0, 0.5), ${button.hoverShadow}`}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)'}
            >
              {/* Ícone */}
              <div 
                className={`rounded-full`}
                style={{
                    padding: '0.75rem', // p-3
                    marginRight: '1rem', // mr-4
                    backgroundColor: button.iconBg,
                }}
              >
                <Icon style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
              </div>
              
              {/* Texto */}
              <div className="text-left">
                <p 
                    className="text-white font-bold text-lg"
                    style={{ color: button.textColor }} // Destacando o título com a cor do tema
                >
                    {button.label}
                </p>
                <p className="text-gray-400 text-sm">{button.description}</p>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Modais Integrados */}
      <TransactionModal 
        isOpen={isTransactionModalOpen} 
        onClose={() => setTransactionModalOpen(false)} 
      />
      <BudgetModal 
        isOpen={isBudgetModalOpen} 
        onClose={() => setBudgetModalOpen(false)} 
      />
      <ManagerModal 
        isOpen={isManagerModalOpen} 
        onClose={() => setManagerModalOpen(false)} 
      />
    </>
  );
};

export default ActionButtons;