import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    '@font-face': [
        {
            fontFamily: 'Amita',
            src: 'url(font/Amita/Amita-Regular.ttf)'
        }, 
        {
            fontFamily: 'Flower',
            src: 'url(font/Gamja_Flower/GamjaFlower-Regular.ttf)'
        },
        {
            fontFamily: 'Dyna',
            src: 'url(font/DynaPuff/static/DynaPuff/DynaPuff-Regular.ttf)'
        }
    ],

    sidebar: {
        width:'max-content',
        //border:'1px solid #f50570',
        background: '#111',
    },
    subtitle : {
        width: "100%",
        display: "block",
        position: 'relative',
        textAlign: "center",
        fontSize: "1.2rem",
        padding: ".5rem 0",
        borderBottom: '1px solid #f5057021',
        borderRight: '1px solid #f5057021',
        boxShadow: '2px 2px 150px 1px #f50570',
        color: "#f50570",
        fontFamily: 'Dyna',
    },
    contentTag: {
        margin: '.25rem',
    },
    alink: {
        border: "none",
        padding: '.4rem .8rem',
        textAlign: 'center',
        color: '#f50570',
        fontSize: '1.2rem',
        margin: '.25rem',
        background: '#171717',
        boxShadow: '0 0 2px #f50570',
        cursor: 'pointer',
        transition:'all .15s',
        
        '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 2.5px #f50570',
        },

    }
});

export default useStyles;