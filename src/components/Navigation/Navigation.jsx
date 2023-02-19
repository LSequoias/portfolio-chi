import React from 'react';
import useStyles from './style';
import {NavLink} from 'react-router-dom';


const Navigation = props => {

  const classes = useStyles();

    return (
        <nav className={classes.navigation}>
          <ul className={classes.nav}>
            {
              props.data.map((list, k) => 
              <li key={k} className={classes.navList}>
                <NavLink to={list.alink}
                  className ={ 
                    ({isActive}) => {
                      return isActive ? classes.linkActif : classes.navLink
                    }
                  }
                  >{list.tag}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
    );
}

export default Navigation;