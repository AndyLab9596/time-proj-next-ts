import { InitialStateType } from "./notification-context";

type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
    }
    : {
        type: Key;
        payload: M[Key];
    }
};

export enum Types {
    SHOW_NOTIFICATION = 'SHOW_NOTIFICATION',
}


type ProductPayload = {
    [Types.SHOW_NOTIFICATION]: undefined
}

export type NotificationActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const notificationReducer = (state: InitialStateType, action: NotificationActions) => {
    switch (action.type) {
        case Types.SHOW_NOTIFICATION: {
            return {
                ...state,
                showNotification: () => true
            }
        }
        
        default:
            return state;
    }
}