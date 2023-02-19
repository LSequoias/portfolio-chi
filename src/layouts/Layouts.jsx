
import Header from './Header/header';
import {motion} from 'framer-motion';
import {animation1, animation2, animationX} from './../services/initialAnimation';

import useStyles from './style';

const Layouts = ({children}) => {
    const classes = useStyles();
    return (
        <motion.div initial="out" animate="in" exit="out" variants={animationX} transition={animation2}>
            <Header/>
            <main className={classes.main}>
                {children}
            </main>
        </motion.div>
    )
}

export default Layouts;