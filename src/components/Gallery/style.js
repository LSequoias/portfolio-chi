import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({


    gallery: {
        width: '70%',
        height: '84vh',
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#111',
        padding: '1rem',
    },
    wrap: {
        display: 'grid',
        position: 'relative',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gridTemplateRows: 'minmax(300px, auto)',
        gridAutoFlow: 'dense',
        overflowY: 'auto',
        gridGap: '10px',
        transition: '0.5s all',
    },
    box: {
        display: 'grid',
        '& figure': {
            margin:0,
            padding:0,
        },
        '&:nth-child(odd)': {
            
            columns: 2,
            gridRow: 'span 2',
        },
        '&:nth-child(even)': {
            
            columns: 2,
            gridRow: 'span 1',
        }
    },

    picture: {
        cursor: 'pointer',
        transition: 'all .3s',
        boxSizing: 'border-box',
        margin: '-1rem',
        height: '100%',
        width: '100%',
        objectFit: 'cover',
    },
 
    '@keyframes zoom' : {
        from: {
            transform: 'scale(0)',
        }, 
        to: {
            transform: 'scale(1)',
        }
    },


    // =1 media

    '@media screen and (max-width: 992px)' : {
        gallery: {
            width: '73%',
        },
        wrap: {
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gridTemplateRows: 'minmax(200px, auto)',
        }
    },
    '@media screen and (max-width: 768px)' : {
        gallery: {
            width:'88%',
        },
        box: {
            '&:nth-child(odd)' : {
                columns: 1,
                gridRow: 'span 2'
            },
            '&:nth-child(even)' : {
                columns: 2,
                gridRow: 'span 2'
            },
            wrap: {
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gridTemplateRows: 'minmax(225px, auto)',
            }
        }
    },

    '@media screen and (max-width: 576px)': {
        gallery: {
            padding: 0,
        },
        wrap: {
            margin: '.5rem',
        }
    }
});


export default useStyles;