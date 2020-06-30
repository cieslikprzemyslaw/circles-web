import { Command } from "./client";
import { IAccount } from "types";
import { checkType } from "./utils";

export class AccountInfo extends Command {
    constructor(account_id: string, flags?: boolean, rooms?: boolean, contacts?: boolean) {
        super(["accountInfo", { account_id, flags: !!flags, rooms: !!rooms, contacts: !!contacts }]);
    }

    parse(status: number, data: IAccount) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountChange extends Command {
    constructor(account_id: string, changes: { label?: string, name?: string, surname?: string }) {
        super(["accountChange", {account_id, changes: JSON.stringify(changes)}]);
    }

    parse(status: number, data: IAccount) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountList extends Command {
    constructor(included?: string[], volume?: number) {
        super(["accountList", { volume, included }]);

        checkType("volume", volume, "number", "undefined");
        // TODO: Support arrays. Replace "object" with "array".
        checkType("included", included, "object", "undefined");
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountCreate extends Command {
    constructor(data: {email: string, password: string, label?: string}) {
        super(["accountCreate", data]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountLogin extends Command {
    constructor(token: string) {
        super(["accountLogin", { token }]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountFind extends Command {
    constructor(data: { email?: string, label?: string }) {
        super(["accountFind", data]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}



export class RoomInfo extends Command {
    constructor(room_id: string, accounts?: boolean) {
        super(["roomInfo", { room_id, accounts }]);
    }

    parse(status: number, data: IAccount) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class RoomCreate extends Command {
    constructor(account_id: string, label: string, invite: string[]) {
        super(["roomCreate", { label, invite: [...invite, account_id] }]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}