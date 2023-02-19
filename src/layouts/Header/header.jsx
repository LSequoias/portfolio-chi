import Navigation from '../../components/Navigation/Navigation';
import lists from '../../params/navigationData';
import useStyles from './style';

const Header = () => {
    const classes = useStyles();

    return (
        <header className={classes.header}>
            <figure className={classes.noMarge}>
                <img className={classes.contentIcon} src="media/icon/logo.png" alt="logo" />
            </figure>
            <Navigation data={lists}/>
        </header>
    )
}

export default Header;