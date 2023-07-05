import { Fragment } from "react";
import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom'

const MainNavigation = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.logo}>Great Quotes</div>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink to='/quotes' activeClassName={classes.active}>
                                All Quotes

                            </NavLink>
                        </li>
                        <il>
                            <NavLink to='/new' activeClassName={classes.active}>
                                Add New Quotes
                            </NavLink>
                        </il>

                    </ul>
                </nav>
            </header>
        </Fragment>
    )

}
export default MainNavigation;