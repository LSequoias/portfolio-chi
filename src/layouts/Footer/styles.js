
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles ({
  flexRow : {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'space-evenly',
    width: '100%',
  },
  flexCenter : {
    display: 'flex', 
    justifyContent: 'center',
    padding: '0'
  },
  typography: {
    fontFamily : 'Verdana',
    textAlign: 'center',
    color : 'grey',

  },
  footer : {
    backgroundColor: '#111',
    position: 'static',
    display : 'flex',
    flexDirection: 'column',
    
    width: '100%',
    boxShadow: 'inset 0px 0px 12px #222',
    borderRadius: '4px',
  },
  blockContact: {
    extend: 'flexRow',
    margin: '1rem auto 0 auto',
  },
  blockDocumentation: {
    extend: 'flexRow',
    margin: '0 auto',
  },
  blockList: {
    padding: '0'
  },
  contentList: {
    extend: 'flexCenter',
  },
  contentLink: {
    extend: 'flexCenter',
    justifyContent: 'space-evenly',
    width: '75%',
    "& li" : {
      listStyleType: "none",
      "& a" : {
        color: "gray",
        transition: "all .3s",

        "&:hover": {
          color: "whitesmoke"
        }
      }
    }
  },
  list: {
    maxWidth: 'max-content',
    height: "min-content",
    borderRadius: '4px',
    boxShadow: '0px 0px 4px #333',
    display: 'flex',
    margin: '.5rem',
    padding: ".2rem",
    "&[data-font='Facebook']:hover" : {
      backgroundColor: '#4F5B93',
    },
    "&[data-font='TikTok']:hover" : {
      backgroundColor: 'white',
      "& a *": {
        color: 'black'
      } 
    },
    "&[data-font='Instagram']:hover" : {
      backgroundImage: "linear-gradient(to right top, #fcaf45, #ff934a, #fd7855, #f35d62, #e34771, #d93c7e, #ca368c, #b73599, #ab39a9, #9940ba, #8048c9, #5b51d8);"
    },

  },
  link: {
    display: "contents",
    color: 'white',
    fontSize: '1.2rem',
    textDecoration:'none',
    transition: 'color .3s',
  },
  
  logo: {
    color: 'white',
    fontSize: '2.25rem',
    display: 'contents'

  },
  title : {
    display: 'inline',
    color: 'white',
    fontSize: '1.8rem',
    boxShadow: 'inset 0px 0px 12px #222',
    width: 'max-content',
    margin: 'auto',
    padding: '.5rem 2rem',
    borderRadius: '4px',
  },
  subtitle : {
    extend: 'typography',
    fontSize: '1.5rem',
    textAlign: 'center',
    padding: '0',
    margin: '0 auto 1rem auto'
  },
  paragraph : {
    extend: 'typography'
  },
  subheader : {
    textDecoration: 'underline',
    fontSize: '1.5rem',
    color: 'white',
  },
  divider: {
    color: '#1e1e1e',
    width: '75%',
    margin: '1rem auto'
  },
  blockMention: {
    width: '75%',
    padding: '.5rem',
    color: '#d5d5d5'
  },
  blockAuthor : {
    borderTop: '3px dashed #1e1e1e',
    marginTop: '1rem',
  }, 
  paragraph : {
    extend: 'typography',
    fontSize: '1.2rem',
    textAlign: 'center',
    margin: '1rem auto'
  },
});

export default useStyles;