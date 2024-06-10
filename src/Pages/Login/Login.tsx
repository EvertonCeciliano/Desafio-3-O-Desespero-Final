// Login.tsx
import React, { useState } from "react";
import { auth, database } from "../../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;
       
        await set(ref(database, "users/" + user.uid), {
          email: user.email,
        });

        navigate("/checkout"); 
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/checkout"); 
      }
    } catch (error) {
      console.error("Error signing in/up", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">
        {isSignUp ? "Sign Up" : "Login"}
      </button>
      <button type="button" onClick={() => setIsSignUp((prev) => !prev)}>
        {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
      </button>
    </form>
  );
};

export default Login;
