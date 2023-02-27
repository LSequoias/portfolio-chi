import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({

    contentModal: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalPicture: {
        width: '80%',
        maxWidth: '978px',
        animation: 'zoom .7s ease',
    },
    modalParagraph: {
        marginTop: '1rem',
        fontSize: '1.8rem',
    },
    closeModal: {
        color: 'white',
        position: 'absolute',
        fontSize: '1.5rem',
        top: '1.2rem',
        right: '1.2rem',
    },
    modal: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top:0,
        left:0,
        backgroundColor: '#111111aa',
        zIndex: 1,
        color: 'white',
        overflow: 'auto',
        opacity: 0,
        pointerEvents: 'none',

        '& show': {
            opacity: 1,
            pointerEvents: 'all',
        },
        '& .show .modalPicture, & .show .modalParagraph': {
            animation: 'zoom .7s ease',
        },

    },
    '@keyframes zoom' : {
        from: {
            transform: 'scale(0)',
        }, 
        to: {
            transform: 'scale(1)',
        }
    },
});

export default useStyles;