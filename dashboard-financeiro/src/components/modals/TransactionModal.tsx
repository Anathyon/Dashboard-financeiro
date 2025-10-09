// src/components/modals/TransactionModal.tsx
import React, { useState } from 'react';
import { MinusCircle, PlusCircle, ChevronDown } from 'lucide-react';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Dados de Categoria de Exemplo (Mantido fora do componente)
const TRANSACTION_CATEGORIES = [
  'Moradia', 'Alimentação', 'Transporte', 'Lazer', 
  'Investimentos', 'Serviços', 'Operações', 'Outros'
];

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, onClose }) => {
  // ----------------------------------------------------------------------
  // ESTADO DO FORMULÁRIO MOVIDO PARA O TOPO (CORRIGIDO)
  // ----------------------------------------------------------------------
  const [transactionType, setTransactionType] = useState<'income' | 'expense'>('expense');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState(TRANSACTION_CATEGORIES[0]);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  // ----------------------------------------------------------------------

  // A condição de saída deve ser o PRIMEIRO item após as chamadas de Hooks
  if (!isOpen) return null;

  // Função de filtro para o input de valor
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Permite apenas números, vírgulas e pontos
    const rawValue = e.target.value;
    const filteredValue = rawValue.replace(/[^0-9.,]/g, '');
    setValue(filteredValue);
  };
  
  // Função Placeholder de Submissão
  const handleSubmit = () => {
    if (!title || !value) {
      alert('Preencha o título e o valor.');
      return;
    }

    const formattedValue = parseFloat(value.replace(',', '.'));

    const transaction = {
      type: transactionType === 'income' ? 'Lucro (Receita)' : 'Prejuízo (Despesa)',
      title,
      value: formattedValue,
      category,
    };

    console.log('Transação a ser salva:', transaction);
    alert(`Transação de ${transaction.type} de R$ ${formattedValue.toFixed(2)} salva!`);
    onClose();
  };

  const isIncome = transactionType === 'income';

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
          Registrar Transação
        </h3>
        {/* ... (Resto do JSX do formulário) ... */}

        {/* 1. SELEÇÃO DE TIPO (Lucro/Prejuízo) */}
        <div 
            className="flex justify-between" 
            style={{ marginBottom: '1rem', gap: '0.75rem' }}
        >
          {/* Botão Lucro */}
          <button
            onClick={() => setTransactionType('income')}
            className={`flex items-center justify-center rounded-lg font-semibold transition duration-150 border-2 w-full ${isIncome ? 'border-green-500' : 'border-gray-700 bg-gray-700 hover:bg-gray-600'}`}
            style={{ padding: '0.75rem' }}
          >
            <PlusCircle style={{ width: '1.2rem', height: '1.2rem', color: '#10B981', marginRight: '0.5rem' }} />
            <span style={{ color: isIncome ? '#10B981' : '#E5E7EB' }}>Lucro (Receita)</span>
          </button>

          {/* Botão Prejuízo */}
          <button
            onClick={() => setTransactionType('expense')}
            className={`flex items-center justify-center rounded-lg font-semibold transition duration-150 border-2 w-full ${!isIncome ? 'border-red-500' : 'border-gray-700 bg-gray-700 hover:bg-gray-600'}`}
            style={{ padding: '0.75rem' }}
          >
            <MinusCircle style={{ width: '1.2rem', height: '1.2rem', color: '#EF4444', marginRight: '0.5rem' }} />
            <span style={{ color: !isIncome ? '#EF4444' : '#E5E7EB' }}>Prejuízo (Despesa)</span>
          </button>
        </div>

        {/* 2. FORMULÁRIO DE DADOS */}
        <div 
            className="flex flex-col" 
            style={{ gap: '1rem' }}
        >
            {/* Input de Título */}
            <input 
                type="text" 
                placeholder="Título/Descrição (Ex: Venda de serviço, Aluguel)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-white text-white"
                style={{ padding: '0.75rem' }}
            />

            {/* Input de Quantia (com filtro) */}
            <input 
                type="text" 
                placeholder="Quantia (R$)"
                value={value}
                onChange={handleValueChange}
                className="w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:border-white text-white"
                style={{ padding: '0.75rem' }}
                inputMode="decimal"
            />
            
            {/* Dropdown de Categoria */}
            <div className="relative">
                <button
                    onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                    className="flex items-center justify-between w-full bg-gray-700 rounded-lg border border-gray-600 focus:outline-none text-white"
                    style={{ padding: '0.75rem' }}
                >
                    {category}
                    <ChevronDown style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
                </button>

                {isCategoryDropdownOpen && (
                    <div 
                        className="absolute w-full mt-1 bg-gray-700 rounded-lg shadow-xl z-10 overflow-hidden" 
                        style={{ maxHeight: '12rem', overflowY: 'auto' }}
                    >
                        {TRANSACTION_CATEGORIES.map(cat => (
                            <div 
                                key={cat}
                                className="block text-sm text-white hover:bg-gray-600 cursor-pointer transition duration-150"
                                style={{ padding: '0.5rem 0.75rem' }}
                                onClick={() => {
                                    setCategory(cat);
                                    setIsCategoryDropdownOpen(false);
                                }}
                            >
                                {cat}
                            </div>
                        ))}
                    </div>
                )}
            </div>
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
            className="bg-green-600 rounded-lg hover:bg-green-700 font-semibold transition"
            style={{ padding: '0.5rem 1rem' }}
            onClick={handleSubmit}
          >
            Salvar Transação
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;