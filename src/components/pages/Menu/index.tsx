import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const Menu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <>
        <section onClick={toggleMenu}>
            {isOpenMenu ? <MenuOpenIcon/> : <MenuIcon/>}  
        </section>
        </>  
    );
};

export default Menu;