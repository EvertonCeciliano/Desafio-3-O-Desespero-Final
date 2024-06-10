// Checkout.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebaseconfig";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
     
      const user = auth.currentUser;
      if (!user) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    <div>
      <h1>Checkout</h1>
      {/* Conteúdo do Checkout */}
    </div>
  );
};


