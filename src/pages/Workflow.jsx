import Layouts from "../layouts/Layouts";
import useStyles from "./style";


const Workflow = () => {
    const classes = useStyles();
    return (
        <Layouts>
            <section className={classes.presentation}>
                <h2 className={classes.title}>Espace des compétences</h2>
            </section>
        </Layouts>
    )
}


export default Workflow;