// src/components/CashFlowChart.tsx
import React from 'react';

// Tipagem básica para os dados que o componente irá receber futuramente
interface ChartData {
  date: string;
  value: number;
  color: string;
}

// O componente agora pode aceitar um array de dados como prop (vazio por enquanto)
interface CashFlowChartProps {
    data?: ChartData[]; // Tornamos opcional e vazio por padrão
}

const CashFlowChart: React.FC<CashFlowChartProps> = ({ data = [] }) => {
  // Dados simulados foram removidos. Usamos 'data' que é um array vazio por padrão.
  
  const chartHeight = 15; // Altura do contêiner do gráfico em rem

  return (
    <div 
      className="bg-gray-800 rounded-xl shadow-lg flex flex-col"
      style={{ padding: '1.5rem', height: '20rem' }} // Altura fixada em 20rem para o placeholder
    >
      <h2 className="text-xl font-bold text-white">Fluxo de Caixa</h2>
      <p className="text-gray-400 text-sm" style={{ marginTop: '0.25rem', marginBottom: '1.5rem' }}>
        Compare entradas e saídas por dia
      </p>

      {/* Lógica Condicional para renderizar o gráfico ou o placeholder */}
      {data.length === 0 ? (
        <div 
            className="flex flex-1 items-center justify-center text-gray-500"
        >
            Nenhum dado de fluxo de caixa disponível. Registre sua primeira transação!
        </div>
      ) : (
        /* Área do Gráfico (Só será renderizada com dados reais) */
        <div 
          className="flex items-end justify-around w-full"
          style={{ height: `${chartHeight}rem`, columnGap: '1rem', paddingBottom: '1rem' }}
        >
          {data.map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-end"
              style={{ height: '100%', width: `${100 / data.length}%`, minWidth: '3rem' }}
            >
              {/* Barra do Gráfico */}
              <div
                className="rounded-lg transition-all duration-700 ease-out"
                style={{
                  height: `${item.value}%`,
                  width: '60%',
                  backgroundColor: item.color,
                }}
              ></div>
              
              {/* Rótulo da Data */}
              <p 
                className="text-gray-400 text-xs text-center"
                style={{ marginTop: '0.5rem' }}
              >
                {item.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CashFlowChart;