import { Card, CardContent, Typography } from '@material-ui/core';
import { AccountGetSuggestions } from 'api/commands';
import { useCommand } from 'api/hooks';
import React from 'react';
import { useStore } from 'store/hooks';

const AccountSuggestions = () => {
    const currentAccount = useStore(state => state.currentAccount ?? null);

    const getSuggestions = useCommand(AccountGetSuggestions)
    console.log(currentAccount)

    return (
        <Card>
            <div>
                <CardContent>
                    <Typography component="h4" variant="h4">

                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default AccountSuggestions;