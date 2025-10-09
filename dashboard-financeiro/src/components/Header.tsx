import React, { useState } from 'react';
import { Menu, X, Globe, User, TrendingUp } from 'lucide-react';
import AccessModal from './AccessModal'; 

// 1. INTERFACE DE PROPS (Para comunicação com App.tsx)
interface HeaderProps {
  onOpenModal: () => void;
  isModalOpen: boolean;
  onCloseModal: () => void;
  onLoginClick: () => void;
  onCreateAccountClick: () => void;
  onVisitorModeClick: () => void;
}

// ----------------------------------------------------------------------
// COMPONENTES SECUNDÁRIOS
// ----------------------------------------------------------------------

const VisitorProfile = () => (
  <div 
    className="flex flex-col items-center justify-center rounded-xl bg-gray-800 text-white cursor-pointer hover:bg-gray-700 transition duration-150"
    style={{ padding: '0.5rem', minWidth: '4.375rem' }} // 8px = 0.5rem; 70px = 4.375rem
  >
    <User style={{ width: '1.5rem', height: '1.5rem' }} />
    <span className="text-sm" style={{ marginTop: '0.25rem' }}>Visitante</span>
    <span className="text-xs text-gray-400">N/A</span>
  </div>
);

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: 'pt', label: 'Português', icon: '🇧🇷' },
    { code: 'en', label: 'English', icon: '🇬🇧' },
    { code: 'es', label: 'Español', icon: '🇪🇸' },
  ];

  const selectedLang = languages.find(lang => lang.code === 'pt'); 

  return (
    <div style={{ position: 'relative' }}>
      <button 
        className="flex items-center rounded-lg bg-gray-700 hover:bg-gray-600 transition duration-150 text-white"
        style={{ padding: '0.5rem', columnGap: '0.5rem' }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Globe style={{ width: '1rem', height: '1rem' }} />
        <span>{selectedLang?.label || 'Idioma'}</span>
        <span style={{ marginLeft: '0.25rem' }}>
          <svg
            className={isDropdownOpen ? 'transform rotate-180' : ''} 
            style={{ width: '1rem', height: '1rem', transition: 'transform 0.2s' }} 
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>

      {isDropdownOpen && (
        <div 
          className="absolute right-0 bg-gray-700 rounded-md shadow-xl z-20 overflow-hidden" 
          style={{ marginTop: '0.5rem', width: '10rem' }} // 8px = 0.5rem; 160px = 10rem
        >
          {languages.map((lang) => (
            <a 
              key={lang.code}
              href="#"
              onClick={(e) => {
                e.preventDefault(); 
                setIsDropdownOpen(false);
              }}
              className="block text-sm text-white hover:bg-gray-600 transition duration-150"
              style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}
            >
              <span style={{ marginRight: '0.5rem' }}>{lang.icon}</span> {lang.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------------------------
// COMPONENTE PRINCIPAL: HEADER
// ----------------------------------------------------------------------

const Header: React.FC<HeaderProps> = ({
    onOpenModal, 
    isModalOpen, 
    onCloseModal, 
    onLoginClick, 
    onCreateAccountClick, 
    onVisitorModeClick
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header 
      className="bg-gray-900 text-white shadow-lg border-b border-gray-800"
      style={{ padding: '1rem' }} // 16px = 1rem
    >
      <div 
        className="max-w-7xl mx-auto flex justify-between items-center"
      >
        
        {/* Seção Esquerda: Título com Ícone */}
        <div className="flex flex-col">
          <div className="flex items-center" style={{ columnGap: '0.5rem' }}> 
            <TrendingUp 
                style={{ width: '1.75rem', height: '1.75rem', color: '#EF4444' }} // 28px = 1.75rem
            />
            <h1 className="text-2xl font-bold tracking-wider">
              Dashboard Financeiro
            </h1>
          </div>

          <p 
            className="text-sm text-gray-400 hidden sm:block"
            style={{ marginTop: '0.125rem', marginLeft: '2.25rem' }} // 2px=0.125rem; 36px=2.25rem
          >
            Monitoramento em tempo real de receitas, despesas e orçamentos
          </p>
        </div>

        {/* Ícone do Menu Mobile (Hamburguer) */}
        <button
          className="md:hidden text-white rounded-md hover:bg-gray-700 transition duration-150 z-50"
          style={{ padding: '0.5rem' }} // 8px = 0.5rem
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X style={{ width: '1.5rem', height: '1.5rem' }} /> : <Menu style={{ width: '1.5rem', height: '1.5rem' }} />}
        </button>

        {/* Seção Direita: Desktop View */}
        <div 
          className="hidden md:flex items-center"
          style={{ columnGap: '1rem' }} // 16px = 1rem
        >
          <VisitorProfile />
          <LanguageSelector />
          <button 
            onClick={onOpenModal} 
            className="bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150 shadow-md"
            style={{ padding: '0.5rem 1.5rem' }} // 8px=0.5rem; 24px=1.5rem
          >
            Entrar
          </button>
        </div>
      </div>

      {/* --- SIDEBAR MOBILE --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ padding: '1.5rem' }} // 24px = 1.5rem
      >
        <div className="flex justify-end" style={{ marginBottom: '2rem' }}></div>
        <div className="flex flex-col" style={{ rowGap: '1.5rem' }}>
          <VisitorProfile />
          <LanguageSelector /> 
          <button 
            onClick={onOpenModal} 
            className="bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150 shadow-md w-full"
            style={{ padding: '0.75rem 1.5rem' }} // 12px=0.75rem; 24px=1.5rem
          >
            Entrar
          </button>
          <nav className="border-t border-gray-700" style={{ paddingTop: '1rem' }}>
            <a href="#" className="block text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-150" style={{ padding: '0.5rem 0rem' }}>Home</a>
            <a href="#" className="block text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-150" style={{ padding: '0.5rem 0rem' }}>Relatórios</a>
            <a href="#" className="block text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-150" style={{ padding: '0.5rem 0rem' }}>Configurações</a>
          </nav>
        </div>
      </div>

      {/* RENDERIZAÇÃO DO MODAL */}
      <AccessModal 
        isOpen={isModalOpen} 
        onClose={onCloseModal}
        onLoginClick={onLoginClick}
        onCreateAccountClick={onCreateAccountClick}
        onVisitorModeClick={onVisitorModeClick}
      />
    </header>
  );
};

export default Header;