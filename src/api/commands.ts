import { Command } from "./client";
import { IAccount } from "types";

export class AccountInfo extends Command {
    constructor(account_id: string) {
        super(["accountInfo", { account_id }]);
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
    constructor(data: {email: string, password: string}) {
        super(["accountCreate", data]);
    }

    parse(status: number, data: any) {
        if(status !== 200) return data;

        // TODO: Ensure types.
        
        return data;
    }
}