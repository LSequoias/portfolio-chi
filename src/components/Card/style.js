
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    expo: {
        display: 'flex',
        flexWrap:'wrap',
        width:'80%',
        maxWidth:'80%',
        height:'80vh',
        margin: '1rem auto',
        overflowY: 'auto',
    },
    card: {
        width:'24%',
        transition: 'all 3s',
        padding: '.2rem',
        margin:0,
    },
    cardMedia: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },


});

export default useStyles;