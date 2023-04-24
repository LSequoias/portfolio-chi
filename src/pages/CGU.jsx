import Layouts from "../layouts/Layouts";
import useStyles from "./style";

const CGU = () => {
    const classes = useStyles();
    return (
        <Layouts>
            <h3 className={classes.title}>Page CGU</h3>
            <p>
                ce site est hébergé par la société à responsabilité 
                limitée ALWAYSDATA, ayant son siège social au 91 rue du Faubourg Saint-Honoré, 75008 Paris (tél. +33 1 84 16 23 40)
            </p>
            <p>Copyright © 2023 LSequoias MIT</p>
        </Layouts>
    )
}

export default CGU;