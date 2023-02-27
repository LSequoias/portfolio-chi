import Layouts from "../layouts/Layouts";
import useStyles from "./style";


// page Accueil
const Home = () => {
    const classes = useStyles();
    return (
        <Layouts>
            <section className={classes.presentation}>
                <article className={classes.description}>
                    <div className={classes.contentDescription}>

                        <p className={classes.paragraph}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ut neque odio id consectetur quisquam veniam molestiae corporis, qui officiis impedit. Distinctio saepe laborum corrupti.
                        </p>

                        <p className={classes.paragraph}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ut neque odio id consectetur quisquam veniam molestiae corporis, qui officiis impedit. Distinctio saepe laborum corrupti.
                        </p>

                        <p className={classes.paragraph}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ut neque odio id consectetur quisquam veniam molestiae corporis, qui officiis impedit. Distinctio saepe laborum corrupti.
                        </p>
                    </div>

                    <figure className={classes.contentMedia}>
                        <img className={classes.image} src="media/images/05.jpg" alt="image de présentation" />
                    </figure>
                </article>
            </section>
        </Layouts>
    );
}

export default Home;