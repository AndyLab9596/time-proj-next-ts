import React, { Fragment } from 'react'
import MainHeader from './main-header'

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = (props) => {
    return (
        <Fragment>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout