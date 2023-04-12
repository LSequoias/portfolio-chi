
import Layouts from "../layouts/Layouts";
import expositionData from './../params/expositionData';
import useStyles from "./style";
import Modal from "./../components/Modal/Modal";

const Tmp = ({data}) => {

    const classes = useStyles();

    return (
        <Layouts>
            <section>
                {expositionData.map((el, k) => (
                    <div key={k}>
                        <img src={el.url} alt={el.textAlter} className={classes.tmpPic} />
                    </div>
                ))}
                <Modal/>
            </section>
        </Layouts>
    )
}

export default Tmp;