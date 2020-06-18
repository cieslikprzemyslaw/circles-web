export interface IStorage {
    accountIdToken?: string;
}

export const getLocalStorageValue = (key: keyof IStorage) => {
    const storage = localStorage as unknown as IStorage;

    return storage[key];
}

export const getLocalStorage = () => {
    return localStorage as unknown as IStorage;
}

export const setLocalStorageValue = (key: keyof IStorage, value: string) => {
    localStorage.setItem(key, value);
}

export const resetLocalStorageValue = (key: keyof IStorage) => {
    localStorage.removeItem(key);
}