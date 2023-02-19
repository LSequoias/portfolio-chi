
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    navigation: {
        padding: 0,
        margin:0,
    },

    nav: {
        listStyleType: 'none',
        display:'flex',
        justifyContent: 'right',
        padding:0,
        margin:0
    },

    navList: {
        fontSize:'1.5rem',
    },

    navLink: {
        display: 'flex',
        justifyContent: 'center',
        padding:'1rem',
        textDecoration: 'none',
        color: '#ccc',
        transition: 'all .5s',
    },

    linkActif: {
        extend: 'navLink',
        color: '#f50570',
    },

});

export default useStyles;