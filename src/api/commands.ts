import { Command } from "./client";
import { IAccount } from "types";

export class AccountInfo extends Command {
    constructor(account_id: string, flags?: boolean, rooms?: boolean) {
        super(["accountInfo", { account_id, flags, rooms }]);
    }

    parse(status: number, data: IAccount) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}

export class AccountList extends Command {
    constructor(volume?: number) {
        super(["accountList", { volume }]);
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