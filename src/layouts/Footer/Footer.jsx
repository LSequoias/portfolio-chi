import {React} from 'react';
import useStyles from './styles';

import {listsOfFooter} from "./../../params/navigationData";
// icons
import {AiOutlineInstagram} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import {GrFacebookOption} from "react-icons/gr";

// utils 
import {createData} from './../../services/utils';

const rows = [
    createData("Facebook",<GrFacebookOption /> ,"https://fr-fr.facebook.com/"),
    createData("Instagram", <AiOutlineInstagram/>, "https://www.instagram.com/"),
    createData("TikTok", <FaTiktok/>, "https://www.tiktok.com/fr/")
];

const Footer = (props) => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>            
            <section className={classes.blockContact}>

                <ul className={classes.blockList}>
                    <p className={classes.subtitle}>Contacte rapide</p>
                    <ul className={classes.contentList}>    
                    {rows.map((row, k) => (
                        <li key={k} className={classes.list} data-font={row.name}>
                            <a target="_blank"
                                rel="noreferrer"
                                className={classes.link}
                                href={row.content}
                            >
                                <span className={classes.logo}>
                                    {row.component}
                                </span>
                            </a>
                        </li>
                    ))}
                    </ul>
                </ul>
            </section>
            <hr className={classes.divider}/>
            <section className={classes.blockDocumentation}>
                <ul className={classes.contentLink}>
                {
                    listsOfFooter.map((list, k) => 
                        <li key={k}>
                            <a href={list.alink} className={classes.link}>{list.tag}</a>
                        </li>
                    )
                }
                </ul>
            </section>
            <section className={classes.blockAuthor}>
                <p className={classes.paragraph}>Copyright © 2023 LSequoias MIT</p>
            </section>
        </footer>
    )
}


export default Footer;