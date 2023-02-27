import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    sidebar: {
        width:'25%',
        border:'1px solid #f50570',
        background: '#111',
    },
    subtitle : {
        width: "100%",
        display: "block",
        textAlign: "center",
        fontSize: "1.2rem",
        padding: ".5rem 0",
        borderBottom: "1px solid #f5057021",
        color: "#f50570"
    },
    alink: {
        border:'1px solid #f5057069',
        padding: '.4rem .8rem',
        textAlign: 'center',
        color: '#f50570',
        fontSize: '1.2rem',
        margin: '.5rem',
        borderRadius: '25px',
        background: '#171717',
        cursor: 'pointer',
        transition:'all .15s',
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 1.5px #f50570',
        }
    }
});

export default useStyles;