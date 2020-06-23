export interface IAccount {
    id: string;
    label: string;
    created_at: Date;
    avatar_url: string;
    email: string;
    name: string;
    surname: string;
    tokens: string[];

    flags?: string[];
    rooms?: IRoom[];
    contacts?: TContact[];
}

export type TContact = {
    account_id: string;
    favorite?: boolean
}

export interface IRoom {
    id: string;
    label: string;
    created_at: Date;
    access: string[];
    accounts?: IAccount[];
}

export interface IMessage {
    value: string;
    author: string;
    timestamp: Date;
}

export type Dictionary<T> = { [key: string]: T };