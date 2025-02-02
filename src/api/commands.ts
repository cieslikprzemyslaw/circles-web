import { Command } from "./client";
import { IAccount } from "types";
import { checkField, checkType } from "./utils";

export class AccountInfo extends Command {
    constructor(account_id: string, flags?: boolean, rooms?: boolean, friends?: boolean) {
        super(["account-accountInfo", { account_id, flags: !!flags, rooms: !!rooms, friends: !!friends }]);

        checkType("account_id", account_id, "string");

        checkType("flags", flags, "boolean", "undefined");
        checkType("rooms", rooms, "boolean", "undefined");
        checkType("friends", friends, "boolean", "undefined");
    }

    parse(status: number, data: IAccount): IAccount {
        if(status !== 200) return data;

        checkType("data", data, "object");

        checkField(data, "id", "string");
        checkField(data, "label", "string");
        checkField(data, "created_at", "string");
        checkField(data, "avatar_url", "string", "undefined");

        checkField(data, "contact", "object");
        if (data.contact)
            checkField(data.contact, "email", "string");

        checkField(data, "details", "object");
        checkField(data, "flags", "object", "undefined");
        checkField(data, "friends", "array", "undefined");
        checkField(data, "rooms", "array", "undefined");
        
        return { ...data, created_at: new Date(data.created_at) };
    }
}

export class AccountChange extends Command {
    constructor(account_id: string, changes: { label?: string, name?: string, surname?: string }) {
        super(["account-accountChange", {account_id, changes: JSON.stringify(changes)}]);
    }

    parse(status: number, data: IAccount) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountList extends Command {
    constructor(included?: string[], volume?: number) {
        super(["account-accountList", { volume, included }]);

        checkType("volume", volume, "number", "undefined");
        checkType("included", included, "array", "undefined");
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountCreate extends Command {
    constructor(data: {email: string, password: string, label?: string}) {
        super(["account-accountCreate", data]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountLogin extends Command {
    constructor(token: string) {
        super(["account-accountLogin", { token }]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountFind extends Command {
    constructor(data: { email?: string, label?: string }) {
        super(["account-accountFind", data]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountAddContact extends Command {
    constructor(data: {account_id: string, contact_id: string}) {
        super(["account-accountAddContact", data]);
    }   
    
    parse(status: number, data: any) {
        if(status !== 200) return data;
        
        return data;
    }
}

export class RoomInfo extends Command {
    constructor(room_id: string, accounts?: boolean) {
        super(["room-roomInfo", { room_id, accounts }]);
    }

    parse(status: number, data: IAccount) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class RoomCreate extends Command {
    constructor(account_id: string, label: string, invite: string[]) {
        super(["room-roomCreate", { label, invite: [...invite, account_id] }]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountGetSuggestions extends Command{
    // deepcode ignore no-any: Type declaration of 'any' loses type-safety
    constructor(account_id: string){
        super(["account-accountGetSuggestions", {account_id}]);
    };

    parse(status: number, data: any){
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }

}
