import Navigation from '../../components/Navigation/Navigation';
import {listsOfHeader} from '../../params/navigationData';
import useStyles from './style';


const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <figure className={classes.noMarge}>
                <img className={classes.contentIcon} src="media/icon/logo.png" alt="logo" />
            </figure>
            <Navigation data={listsOfHeader}/>
        </header>
    )
}

export default Header;