// src/pages/Dashboard.tsx
import React from 'react';
import { TrendingUp, Briefcase, DollarSign, BarChart2 } from 'lucide-react'; 
import MetricCard from '../components/MetricCard';
import CashFlowChart from '../components/CashFlowChart';
import RecentTransactions from '../components/RecentTransactions';
import ActionButtons from '../components/ActionButtons';

// ----------------------------------------------------------------------
// DADOS DE ESTADO INICIAL (ZERADO)
// O Dashboard é inicializado com R$ 0,00 e status "neutro" antes de carregar dados reais.
// ----------------------------------------------------------------------
const INITIAL_METRICS = [
  {
    title: 'SALDO CONSOLIDADO',
    value: 'R$ 0,00',
    trendText: 'Sem dados',
    trendType: 'neutral' as const,
    icon: TrendingUp,
    iconColor: '#9CA3AF', // Cinza/Neutro
  },
  {
    title: 'RECEITAS ACUMULADAS',
    value: 'R$ 0,00',
    trendText: 'Sem dados',
    trendType: 'neutral' as const,
    icon: DollarSign,
    iconColor: '#9CA3AF',
  },
  {
    title: 'DESPESAS ACUMULADAS',
    value: 'R$ 0,00',
    trendText: 'Sem dados',
    trendType: 'neutral' as const,
    icon: Briefcase,
    iconColor: '#9CA3AF',
  },
  {
    title: 'PROJEÇÃO AUTOMÁTICA',
    value: 'R$ 0,00',
    trendText: 'Aguardando dados',
    trendType: 'neutral' as const,
    icon: BarChart2,
    iconColor: '#9CA3AF',
  },
];
// ----------------------------------------------------------------------

const Dashboard: React.FC = () => {
  const metrics = INITIAL_METRICS; 

  return (
    <div 
      className="min-h-screen bg-gray-900 text-white"
      // Garante que o conteúdo começa abaixo do Header fixo
      style={{ padding: '2rem 1rem', paddingTop: '6rem' }} 
    >
      <div 
        className="max-w-7xl mx-auto"
        style={{ rowGap: '2rem' }}
      >
        
        {/* Bloco 0: Botões de Ação */}
        {/* Lógica de modais está encapsulada dentro do ActionButtons.tsx */}
        <ActionButtons /> 
        
        {/* Bloco 1: Cartões de Métricas */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: '1rem' }}
        >
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              trendText={metric.trendText}
              trendType={metric.trendType}
              icon={metric.icon}
              iconColor={metric.iconColor}
            />
          ))}
        </div>

        {/* Bloco 2: Gráficos */}
        <div className="grid lg:grid-cols-2" style={{ gap: '2rem', marginTop: '2rem' }}>
            
            {/* CashFlowChart renderiza o placeholder "sem dados" */}
            <CashFlowChart />

            {/* Placeholder para outros gráficos ou tabelas futuras */}
            <div 
                className="bg-gray-800 rounded-xl shadow-lg flex items-center justify-center text-gray-400"
                style={{ height: '20rem', padding: '1.5rem' }}
            >
                [ Placeholder: Futuro Gráfico de Receitas/Despesas por Categoria ]
            </div>
        </div>
        
        {/* Bloco 3: Movimentações Recentes */}
        {/* RecentTransactions renderiza a tabela vazia com mensagem */}
        <RecentTransactions />

      </div>
    </div>
  );
};

export default Dashboard;