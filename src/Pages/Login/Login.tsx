import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseconfig';
import { useNavigate, useLocation } from 'react-router-dom';
import { CaretRight, GoogleLogo } from '@phosphor-icons/react';
import * as S from './styles';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError('Email ou senha inválidos');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      navigate(from, { replace: true });
    } catch (error) {
      setError('Erro ao fazer login com Google');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate(from, { replace: true });
    } catch (error) {
      setError('Erro ao criar conta');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <S.PathContainer>
        <p>Home</p>
        <CaretRight size={16} weight="bold" />
        <p>{isRegistering ? 'Registro' : 'Login'}</p>
      </S.PathContainer>

      <S.LoginCard>
        <S.Title>{isRegistering ? 'Criar Conta' : 'Login'}</S.Title>
        
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
        
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          <S.FormGroup>
            <S.Label>Email</S.Label>
            <S.Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Senha</S.Label>
            <S.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
              required
            />
          </S.FormGroup>

          <S.Button type="submit" disabled={isLoading}>
            {isLoading ? 'Carregando...' : isRegistering ? 'Criar Conta' : 'Entrar'}
          </S.Button>
        </form>

        <S.GoogleButton 
          type="button" 
          onClick={handleGoogleLogin}
          disabled={isLoading}
        >
          <GoogleLogo size={24} weight="bold" />
          Continuar com Google
        </S.GoogleButton>

        <S.ToggleText onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering 
            ? 'Já tem uma conta? Faça login' 
            : 'Não tem uma conta? Registre-se'}
        </S.ToggleText>
      </S.LoginCard>
    </S.Container>
  );
}
