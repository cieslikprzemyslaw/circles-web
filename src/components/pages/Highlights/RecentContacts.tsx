import React from 'react';
import { useStore } from 'store/hooks';
import RecentContact from './RecentContact';


const RecentContacts = () => {
    const currentAccount = useStore(state => state.currentAccount);
    if (!currentAccount?.contacts) return null

    return <>
    {currentAccount.contacts.map(contact => <RecentContact contact={contact} />)}
    </>
}


export default RecentContacts;