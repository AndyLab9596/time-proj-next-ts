import { createContext, useState, useEffect } from "react";

interface IContextProviderProps {
    children: React.ReactNode
}

export interface INotification {
    title: string;
    message: string;
    status: 'success' | 'error' | 'pending'
}

export type InitialStateType = {
    notification: INotification | null;
    showNotification: (notification: INotification) => void;
    hideNofitication: () => void;
}

const initialState = {
    notification: null,
    showNotification: function () { },
    hideNofitication: function () { }
}

const NotificationContext = createContext<InitialStateType>(initialState);

export const NotificationContextProvider: React.FC<IContextProviderProps> = ({ children }) => {

    // const [state, dispatch] = useReducer(notificationReducer, initialState);

    const [activeNotification, setActiveNotification] = useState<INotification | null>(null);

    function showNotificationHandler(notificationData: NonNullable<INotification>) {
        setActiveNotification(notificationData);
    }

    function hideNofiticationHandler() {
        setActiveNotification(null);
    }

    const context: InitialStateType = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNofitication: hideNofiticationHandler
    }

    useEffect(() => {
        if (
            activeNotification
            && activeNotification.status === 'success'
            || activeNotification?.status === 'error'
        ) {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 3000)

            return () => {
                clearTimeout(timer);
            }
        }
    }, [activeNotification])

    return (
        <NotificationContext.Provider value={{ ...context }} >
            {children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;