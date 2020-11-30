import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import useStyles from "./styles";

const Menu = () => {
    const classes = useStyles();
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <>
        <section onClick={toggleMenu}>
            {isOpenMenu ? <MenuOpenIcon className={classes.menuIcon}/> : <MenuIcon className={classes.menuIcon}/>}  
        </section>
        </>  
    );
};

export default Menu;