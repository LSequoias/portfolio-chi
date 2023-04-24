
import Layouts from "../layouts/Layouts";
import useStyles from "./style";

const NotFound = () => {
    const classes = useStyles();
    return (
        <Layouts>
            <section className={classes.presentation}>
                <h3>NotFound - 404</h3>
            </section>
        </Layouts>
    );
}

export default NotFound;