import React, { ReactNode } from 'react';
import styles from './Path.module.css'; 

interface PathProps {
  children: ReactNode;
  title: ReactNode; 
  
}

export const Path: React.FC<PathProps> = ({ children, title }) => {
  return (
    <div className={styles.header}>
      <div className={styles.path}>
        <img
          src="https://aws-compass-desafio3.s3.us-east-2.amazonaws.com/logoFurino.svg"
          className={styles.logo}
          alt="Logo"
        />
          {title && <h2>{title}</h2>}
        <div className={styles.pathWrapper}>
          {children}
        </div>
      </div>
    </div>
  );
}


