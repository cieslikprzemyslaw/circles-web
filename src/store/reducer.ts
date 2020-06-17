import { IState } from "./context";
import { StoreAction } from "./hooks";

export const reduceState = (setStore: React.Dispatch<React.SetStateAction<IState>>, action: StoreAction) => {
    setStore((state: IState) => {
        const changes: Partial<IState> = {};

        // Add actions here!
        // ! This might seem a little complicated but some refactoring might help.
        switch(action.type) {
            case "SET_CURRENT_ACCOUNT":
                changes.currentAccount = {...action.payload};
                break;
        }

        return {...state, ...changes}
    });
}