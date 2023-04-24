
import Header from './Header/header';
import Footer from './Footer/Footer';
import {motion} from 'framer-motion';
import {animation2, animationX} from './../services/initialAnimation';

import useStyles from './style';

const Layouts = ({children}) => {
    const classes = useStyles();
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationX} transition={animation2}>
            <Header/>
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
        </motion.div>
    )
}

export default Layouts;