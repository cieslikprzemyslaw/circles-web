import { Room } from 'components/pages';
import React from 'react';
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import Highlights from './components/pages/Highlights'

const HomeLayouts = () => {
    return (
        <>
            <Route path="/home/highlights" component={Highlights} /> 
            <Route path="/home/room/:id" component={Room} /> 
        </>
    );
};

export default HomeLayouts;