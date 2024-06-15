import React from 'react';
import styles from '../ProductCard/Product.module.css';

interface NewTagProps {
  isNew: boolean;
}

const NewTag: React.FC<NewTagProps> = ({ isNew }) => {
  if (!isNew) return null;

  return (
    <div className={`${styles.tag} ${styles.newTag}`}>
      New
    </div>
  );
};

export default NewTag;
