import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseconfig'
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isRegistering, setIsRegistering] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/checkout');
    } catch (error) {
      setError('Invalid email or password');
    }
  }

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()

    try {
      await signInWithPopup(auth, provider)
      navigate('/checkout');
    } catch (error) {
      setError('Failed to login with Google')
    }
  }

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/checkout')
    } catch (error) {
      setError('Failed to create an account')
    }
  }

  return (
    <div className={styles.container}>
      <h1>{isRegistering ? 'Register' : 'Login'}</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={isRegistering ? handleRegister : handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <button onClick={handleGoogleLogin}>Login with Google</button>
      <p onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Login' : "Don't have an account? Register"}
      </p>
    </div>
  );
};
