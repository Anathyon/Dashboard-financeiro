// src/components/MetricCard.tsx
import React from 'react';
// Importe os ícones que você precisar

interface MetricCardProps {
  title: string;
  value: string;
  trendText: string;
  trendType: 'up' | 'down' | 'neutral';
  icon: React.ElementType; // Usamos React.ElementType para passar o componente Lucide
  iconColor: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  trendText,
  trendType,
  icon: Icon, // Renomeamos 'icon' para 'Icon' para usá-lo como um componente JSX
  iconColor,
}) => {
  // Define a cor da tendência (TrendText)
  const trendStyle = {
    color: trendType === 'up' ? '#10B981' : (trendType === 'down' ? '#EF4444' : '#9CA3AF'),
    marginTop: '0.25rem',
    fontSize: '0.875rem'
  };

  return (
    <div 
      className="bg-gray-800 rounded-xl shadow-lg flex items-center"
      style={{ padding: '1.25rem', columnGap: '1rem' }} // 20px=1.25rem; 16px=1rem
    >
      
      {/* Ícone Redondo */}
      <div 
        className="rounded-full flex items-center justify-center bg-gray-900"
        style={{ width: '3.5rem', height: '3.5rem', minWidth: '3.5rem' }} // 56px = 3.5rem
      >
        <Icon style={{ width: '1.5rem', height: '1.5rem', color: iconColor }} />
      </div>

      {/* Conteúdo (Valores) */}
      <div className="flex flex-col">
        <p className="text-gray-400 text-sm">{title}</p>
        <p 
          className="text-white font-bold"
          style={{ fontSize: '1.5rem', marginTop: '0.25rem' }} // 24px = 1.5rem; 4px=0.25rem
        >
          {value}
        </p>
        <p style={trendStyle}>
          {trendType === 'up' && 'Alta • '}
          {trendType === 'down' && 'Queda • '}
          {trendText}
        </p>
      </div>
    </div>
  );
};

export default MetricCard;