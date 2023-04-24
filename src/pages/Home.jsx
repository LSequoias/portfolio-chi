import Layouts from "../layouts/Layouts";
import useStyles from "./style";

// animations
import {motion} from 'framer-motion';

import homeData from "./../params/homeData";

// page Accueil
const Home = props => {
    const classes = useStyles();
    return (
        <Layouts>
            <section className={classes.presentation}>
                <article className={classes.description}>
                    <motion.div className={classes.contentDescription}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 8,
                            stiffness: 100,
                            restDelta: 0.01
                        }
                    }}>
                        {
                            homeData.map((el, k) => 
                                <p key={k} className={classes.paragraph}>{el.text}</p>
                            )
                        }
                    </motion.div>

                    <figure className={classes.contentMedia}>
                        <img className={classes.image} src="media/images/05.jpg" alt="image de présentation" />
                    </figure>
                </article>
            </section>
        </Layouts>
    );
}

export default Home;