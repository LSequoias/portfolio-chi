import Layouts from "../layouts/Layouts";
import useStyles from "./style";


const Workflow = () => {
    const classes = useStyles();
    return (
        <Layouts>
            <h2 className={classes.title}>Espace des compétances</h2>
        </Layouts>
    )
}


export default Workflow;