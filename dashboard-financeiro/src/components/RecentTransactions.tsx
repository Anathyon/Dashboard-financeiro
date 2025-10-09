// src/components/RecentTransactions.tsx
import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react'; 

// ----------------------------------------------------------------------
// 1. Tipagem e Dados (Apenas Estrutura)
// ----------------------------------------------------------------------

interface Transaction {
  id: number;
  description: string;
  category: string;
  date: string;
  value: number;
  type: 'income' | 'expense';
}

const CATEGORIES = [
  'Todas as categorias', 'Receitas', 'Moradia', 'Alimentação', 
  'Transporte', 'Lazer', 'Investimentos', 'Serviços', 'Operações'
];

// O array de transações inicial é vazio
const INITIAL_TRANSACTIONS: Transaction[] = []; 

// ----------------------------------------------------------------------
// 2. Componente Principal
// ----------------------------------------------------------------------

const RecentTransactions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const transactions = INITIAL_TRANSACTIONS; // Usamos o array vazio

  // Função que irá formatar o valor (mantida, será útil ao receber dados reais)
  const formatValue = (value: number, type: 'income' | 'expense') => {
    const color = type === 'income' ? '#10B981' : '#EF4444';
    const sign = type === 'income' ? '+' : '-';
    
    const formattedValue = Math.abs(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return (
      <span style={{ color, fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
        {sign} R$ {formattedValue}
      </span>
    );
  };

  return (
    <div 
      className="bg-gray-800 rounded-xl shadow-lg flex flex-col"
      style={{ padding: '1.5rem', marginTop: '2rem' }}
    >
      {/* HEADER DA TABELA (Título, Filtro, Exportar) - INALTERADO */}
      <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-white">Movimentações recentes</h2>
          <p className="text-gray-400 text-sm">Transações agrupadas por categoria</p>
        </div>

        {/* CONTROLES (Dropdown e Exportar) - INALTERADO */}
        <div className="flex items-center" style={{ columnGap: '1rem', position: 'relative' }}>
          
          {/* Dropdown de Categoria */}
          {/* ... (Lógica do Dropdown - Inalterada) */}
          <button 
            className="flex items-center bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition duration-150"
            style={{ padding: '0.5rem 1rem', columnGap: '0.5rem' }}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedCategory}
            <ChevronDown style={{ width: '1rem', height: '1rem' }} />
          </button>

          {isDropdownOpen && (
            <div 
              className="absolute top-full right-0 mt-2 bg-gray-700 rounded-md shadow-xl z-10 overflow-hidden" 
              style={{ width: '15rem', transform: 'translateX(-5rem)' }}
            >
              {CATEGORIES.map(category => (
                <div 
                  key={category}
                  className="block text-sm text-white hover:bg-gray-600 cursor-pointer transition duration-150"
                  style={{ padding: '0.5rem 1rem' }}
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsDropdownOpen(false);
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          )}

          {/* Botão Exportar */}
          <button 
            className="flex items-center bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition duration-150"
            style={{ padding: '0.5rem 1rem', columnGap: '0.5rem' }}
            onClick={() => alert('Funcionalidade de Exportar CSV (futuro)')}
          >
            <Download style={{ width: '1rem', height: '1rem' }} />
            Exportar CSV
          </button>
        </div>
      </div>

      {/* TABELA DE TRANSAÇÕES */}
      <div className="overflow-x-auto">
        <table 
          className="min-w-full text-white" 
          style={{ borderCollapse: 'separate', borderSpacing: '0 0.5rem' }}
        >
          <thead>
            <tr className="text-sm text-gray-400 font-semibold uppercase">
              <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>DESCRIÇÃO</th>
              <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>CATEGORIA</th>
              <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>DATA</th>
              <th style={{ padding: '0.5rem 1rem', textAlign: 'right' }}>VALOR</th>
            </tr>
          </thead>
          <tbody>
            {/* LÓGICA CONDICIONAL: SE HOUVER TRANSAÇÕES, RENDERIZA; SENÃO, MOSTRA MENSAGEM */}
            {transactions.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center text-gray-500" style={{ padding: '2rem 1rem' }}>
                  Nenhuma transação encontrada. Comece a registrar suas movimentações!
                </td>
              </tr>
            ) : (
              transactions.map(tx => (
                <tr 
                  key={tx.id} 
                  className="text-sm bg-gray-700 hover:bg-gray-600 transition duration-150"
                  // Estilos para <tr> são limitados, mas mantemos o estilo da célula
                >
                  <td style={{ padding: '0.75rem 1rem', borderRadius: '0.5rem 0 0 0.5rem' }}>{tx.description}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>{tx.category}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>{tx.date}</td>
                  <td style={{ padding: '0.75rem 1rem', borderRadius: '0 0.5rem 0.5rem 0', textAlign: 'right' }}>
                    {formatValue(tx.value, tx.type)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;