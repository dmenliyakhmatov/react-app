import { MouseEvent, ReactNode } from 'react';
import styles from './iconButton.module.css';

type IconButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const IconButton = ({ icon, children, onClick }: IconButtonProps) => {
  return (
    <button className={styles.iconButton} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
};
