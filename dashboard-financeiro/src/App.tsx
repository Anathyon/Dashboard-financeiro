// src/App.tsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Importe seus componentes
import Header from './components/Header';
import LoginScreen from './pages/LoginScreen';
import RegisterScreen from './pages/RegisterScreen';
import Dashboard from './pages/Dashboard'; 

import './index.css';

// -----------------------------------------------------------
// Componente para a Home (HomePage)
// -----------------------------------------------------------
const HomePage = () => (
  <div className='p-8 bg-gray-900 text-white min-h-screen' style={{ paddingTop: '6rem' }}>
    <h2 className='text-3xl font-bold'>Bem-vindo!</h2>
    <p className='text-gray-400 mt-2'>Use o botão "Entrar" para acessar o dashboard.</p>
  </div>
);


// -----------------------------------------------------------
// Componente que gerencia o estado e o roteamento (MainApp)
// -----------------------------------------------------------
const MainApp = () => {
  const navigate = useNavigate(); // Hook para navegação
  const location = useLocation(); // Hook para saber a rota atual
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções de navegação acionadas pelo AccessModal ou telas de Auth
  const handleLogin = () => {
    setIsModalOpen(false);
    navigate('/login');
  };

  const handleCreateAccount = () => {
    setIsModalOpen(false);
    navigate('/register');
  };

  const handleVisitorMode = () => {
    setIsModalOpen(false);
    // Simula o login indo para o Dashboard
    navigate('/dashboard'); 
  };
  
  // Verifica se estamos em uma rota de autenticação
  const isAuthRoute = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className='min-h-screen bg-gray-900'>
      
      {/* HEADER: Fixado no topo, não renderiza nas telas de login/cadastro */}
      {isAuthRoute ? null : ( 
        <Header 
          onOpenModal={() => setIsModalOpen(true)}
          isModalOpen={isModalOpen} 
          onCloseModal={() => setIsModalOpen(false)}
          onLoginClick={handleLogin}
          onCreateAccountClick={handleCreateAccount}
          onVisitorModeClick={handleVisitorMode}
        />
      )}
      
      {/* ROTAS */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Rotas de Autenticação */}
        <Route 
          path="/login" 
          element={
            <LoginScreen 
              onNavigateToRegister={handleCreateAccount} // Navega para /register
              onNavigateToDashboard={handleVisitorMode} // Vai para /dashboard após login
            />
          } 
        />
        <Route 
          path="/register" 
          element={
            <RegisterScreen 
              onNavigateToLogin={handleLogin} // Navega para /login
              onNavigateToDashboard={handleVisitorMode} // Vai para /dashboard após cadastro
            />
          } 
        />
        
        {/* Rota Principal do Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};


// -----------------------------------------------------------
// Componente Raiz (App)
// -----------------------------------------------------------
function App() {
  // Apenas envolve o MainApp com o Router
  return (
    <Router>
      <MainApp /> {/* Chama o MainApp, onde está toda a lógica */}
    </Router>
  )
}

export default App;