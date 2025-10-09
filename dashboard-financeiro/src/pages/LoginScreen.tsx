import React from 'react';
import { LogIn } from 'lucide-react';

// Aceita uma prop para navegar (será a função de navegação do react-router-dom)
interface LoginScreenProps {
  onNavigateToRegister: () => void;
  onNavigateToDashboard: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ 
  onNavigateToRegister,
  onNavigateToDashboard
}) => {
  return (
    <div 
      className="flex flex-col items-center justify-center bg-gray-900"
      style={{ minHeight: '100vh', padding: '20px' }}
    >
      <div 
        className="bg-gray-800 rounded-xl shadow-2xl text-white"
        style={{ width: '400px', maxWidth: '100%', padding: '40px' }}
      >
        <div 
          className="flex items-center justify-center text-red-500"
          style={{ marginBottom: '16px' }}
        >
          <LogIn style={{ width: '32px', height: '32px' }} />
        </div>
        
        <h2 
          className="text-2xl font-bold text-center"
          style={{ marginBottom: '8px' }}
        >
          Acessar Sua Conta
        </h2>
        <p 
          className="text-gray-400 text-center text-sm"
          style={{ marginBottom: '24px' }}
        >
          Use seu nome de usuário e senha.
        </p>

        <form 
          className="flex flex-col"
          style={{ rowGap: '16px' }}
          // Ação placeholder para evitar reload
          onSubmit={(e) => { e.preventDefault(); onNavigateToDashboard(); }} 
        >
          {/* Input: Nome de Usuário */}
          <div>
            <label 
              className="block text-sm font-medium text-gray-300"
              style={{ marginBottom: '6px' }}
            >
              Nome de Usuário
            </label>
            <input 
              type="text"
              placeholder="Seu nome de usuário"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
              style={{ padding: '10px 14px' }}
            />
          </div>

          {/* Input: Senha */}
          <div>
            <label 
              className="block text-sm font-medium text-gray-300"
              style={{ marginBottom: '6px' }}
            >
              Senha
            </label>
            <input 
              type="password"
              placeholder="Sua senha secreta"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
              style={{ padding: '10px 14px' }}
            />
          </div>

          {/* Botão de Login */}
          <button 
            type="submit"
            className="bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150"
            style={{ padding: '12px 20px', marginTop: '8px' }}
          >
            Fazer Login
          </button>
        </form>
        
        {/* Link para Cadastro */}
        <p 
          className="text-center text-sm text-gray-400"
          style={{ marginTop: '24px' }}
        >
          Não tem uma conta?{' '}
          <button 
            onClick={onNavigateToRegister}
            className="text-red-400 hover:text-red-300 font-medium transition duration-150"
          >
            Crie uma agora!
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;