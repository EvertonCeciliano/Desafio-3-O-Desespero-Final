// DefaultLayout.tsx
import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";

import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

export function DefaultLayout() {
  const [user, setUser] = useState<null | string>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
