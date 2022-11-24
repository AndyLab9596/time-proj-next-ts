import Link from 'next/link'
import React from 'react'
import classes from './button.module.css'

interface IButtonProps {
    children: React.ReactNode;
    link?: string;
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({ children, link, onClick }) => {
    if (link) {
        return (
            <Link href={link} legacyBehavior passHref >
                <a className={classes.btn}>
                    {children}
                </a>
            </Link>
        )
    }

    return <button className={classes.btn} onClick={onClick}>{children}</button>
}

export default Button