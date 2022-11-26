import React, { Fragment, useContext } from 'react'
import NotificationContext from '../../store/notification-context'
import Notification from '../ui/notification'
import MainHeader from './main-header'

interface ILayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = (props) => {

    const notificationCtx = useContext(NotificationContext);

    const activeNotification = notificationCtx.notification;

    return (
        <Fragment>
            <MainHeader />
            <main>
                {props.children}
            </main>
            {!!activeNotification && (
                <Notification
                    title={activeNotification.title}
                    message={activeNotification.message}
                    status={activeNotification.status}
                />
            )}
        </Fragment>
    )
}

export default Layout