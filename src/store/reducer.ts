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

            case "SET_BACKGROUND_THEME":
                // TODO: Make sure to initialize preferences before accessing reducer...
                if (!changes.preferences) changes.preferences = {};
                // @ts-ignore
                changes.preferences.backgroundTheme = { ...action.payload } as { id: string, url: string, label: string }
                break;
        }

        return {...state, ...changes}
    });
}