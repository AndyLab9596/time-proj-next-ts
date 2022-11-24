import Link from 'next/link'
import React from 'react'
import classes from './main-header.module.css';

interface IMainHeaderProps {

}

const MainHeader: React.FC<IMainHeaderProps> = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href='/'>NextEvent</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href='/events'>Browse All Events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader