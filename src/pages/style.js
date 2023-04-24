import { createUseStyles } from "react-jss";


const useStyles = createUseStyles({
    tmpPic : {
        width: "25%",
        height: "25%",
        objectFit: "cover",
    },
    presentation: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#111111e0',
        margin: '.5rem 0'
    },
    title: {
        color: '#9c4545',
        fontSize: '2.2rem',
        textIndent: '5rem',
    },
    description: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
        height: 'auto',
        minHeight: '71vh',
        margin: '4rem auto',

    },
    contentDescription : {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: '50%',
        height: 'fit-content',
        position: 'relative',
        '&:before, &:after' : {
            content: "''",
            position: 'absolute',
            width: '100px',
            height: '100px',
        },
        '&:before' : {
            top: '0',
            left: '0',
            borderTop: '4px solid mediumaquamarine',
            borderLeft: '4px solid mediumseagreen',
        },
        '&:after' : {
            bottom: '0',
            right: '0',
            borderBottom: '4px solid mediumseagreen',
            borderRight: '4px solid mediumaquamarine',
        }
    },
    paragraph: {
        color: 'gray',
        fontSize:'1.5rem',
        margin: '2rem',
    },
    contentMedia: {
        height: '480px',
        width: '480px',
        margin: 0,
        padding:0,
        border: '1px solid #9c4545',
        boxShadow: '-5px -5px 0px tomato,5px 5px darkorange',
    },
    image: {
        width:'100%',
        height: '100%',
        objectFit: 'cover',
    },
    exposition: {
        display: 'flex',
        margin: '.5rem 0',
        justifyContent: 'space-between',
        width: '100%',
    },
    // =1 media

    '@media screen and (max-width: 992px)' : {
        paragraph: {
            fontSize: '1.5rem',
        },
        description : {
            flexDirection: 'column-reverse',
            margin:'4rem',
        },
        contentDescription: {
            width: '100%',
            margin: '4rem auto',
            boxShadow: 'inset 0 0 3px #404040',
            backgroundColor: '#2b2b2b17',
        },
        contentMedia: {
            height: '70%',
            width: '100%',
        }
    },

    '@media screen and (max-width: 576px)': {
        description: {
            flexDirection: "column-reverse",
        },
        paragraph: {
            color: 'gray',
            fontSize:'1.5rem',
            margin: '2rem',
        },
        contentMedia: {
            width: '100%',
        }
    }
});


export default useStyles;