
import Layouts from "../layouts/Layouts";
import useStyles from "./style";


const Contact = () => {
    const classes = useStyles();
    return (
        <Layouts>
            <section className={classes.presentation}>
                <h3>Contact</h3>
            </section>
        </Layouts>
    );
}

export default Contact;