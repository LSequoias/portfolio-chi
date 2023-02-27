import useStyles from "./style";



const Modal = ({currentImage, setCurrentImage}) => {
    const classes = useStyles();

    const handleClose = e => {
        if(e.target.classList.contains('closeModal')) {
            setCurrentImage(null);
        }
    }

    return (
        <div className={classes.modal}>
            <span className={classes.closeModal} onClick={handleClose}>x</span>
            <div className={classes.contentModal}>
                <img src={currentImage} />
                <p className={classes.paragraph}>
                    
                </p>
            </div>
        </div>
    )
}

export default Modal;