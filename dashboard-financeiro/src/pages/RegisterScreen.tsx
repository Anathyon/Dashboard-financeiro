import React from 'react';
import { UserPlus } from 'lucide-react';

// Aceita uma prop para navegar
interface RegisterScreenProps {
  onNavigateToLogin: () => void;
  onNavigateToDashboard: () => void;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ 
  onNavigateToLogin,
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
          <UserPlus style={{ width: '32px', height: '32px' }} />
        </div>
        
        <h2 
          className="text-2xl font-bold text-center"
          style={{ marginBottom: '8px' }}
        >
          Crie Sua Conta
        </h2>
        <p 
          className="text-gray-400 text-center text-sm"
          style={{ marginBottom: '24px' }}
        >
          É rápido e seguro.
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
              placeholder="Escolha um nome de usuário"
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
              placeholder="Mínimo de 6 caracteres"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:ring-red-500 focus:border-red-500"
              style={{ padding: '10px 14px' }}
            />
          </div>

          {/* Botão de Cadastro */}
          <button 
            type="submit"
            className="bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150"
            style={{ padding: '12px 20px', marginTop: '8px' }}
          >
            Criar Conta
          </button>
        </form>
        
        {/* Link para Login */}
        <p 
          className="text-center text-sm text-gray-400"
          style={{ marginTop: '24px' }}
        >
          Já tem uma conta?{' '}
          <button 
            onClick={onNavigateToLogin}
            className="text-red-400 hover:text-red-300 font-medium transition duration-150"
          >
            Fazer Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;