export interface IAccount {
    id: string;
    label: string;
    created_at: Date;
    contact: Dictionary<string>;
    avatar_url?: string;

    details: TAccountDetails;

    flags?: string[];
    rooms?: IRoom[];
    friends?: IFriend[];
}

export type TAccountDetails = {
    first_name: string;
    middle_name?: string;
    last_name: string;
    birthdate?: Date;
    sex?: "M" | "F" | "O";
}

export type TContact = {
    account_id: string;
    favorite?: boolean;
    last_contacted?: Date;
}

export interface IFriend {
    account_id: string;
    favorite?: boolean;
    last_contacted?: Date;
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

export type TSuggestion = {
    type: "long-not-messaged"
    | "never-messaged"
    | "verify-email";
    payload?: Dictionary<any>;
}

export type Dictionary<T> = { [key: string]: T };