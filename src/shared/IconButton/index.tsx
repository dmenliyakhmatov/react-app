import React, { MouseEvent, ReactNode } from 'react';
import styles from './iconButton.module.css';

type IconButtonProps = {
    icon?: ReactNode;
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, children, onClick }) => {
    return (
        <button className={styles.iconButton} onClick={onClick}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
};
