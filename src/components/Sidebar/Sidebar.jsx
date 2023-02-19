import React, {useState, useEffect} from 'react';
import useStyles from './style';


const Sidebar = () => {
  const classes = useStyles();

  const [name, setName] = useState([]);

  
  return (
    <nav className={classes.sidebar}>
      <ul>
        <li><a href="">aaaa</a></li>
        <li><a href="">bbbb</a></li>
        <li><a href="">cccc</a></li>
      </ul>
    </nav>
  );
}

export default Sidebar;