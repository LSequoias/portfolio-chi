import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    header: {
        display:'flex',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#111',
    },
    noMarge: {
        margin:0,
        padding:0
    },
    contentIcon: {
        width: '64px',
        height: '64px',
        objectFit: 'cover',
    }
});

export default useStyles;