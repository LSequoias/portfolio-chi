import useStyles from "./style";

const Modal = (modalData) => {
    const classes = useStyles();
    //console.log({modal})

    const handleClose = e => {
        if(e.target.classList.contains('closeModal')) {
            setCurrentImage(null);
        }
    }

    return (
        <div className={classes.modal}>
            <span className={classes.closeModal} onClick={handleClose}>x</span>
            <div className={classes.contentModal}>
                <p className={classes.paragraph}>
                    {modalData.paragraph}
                </p>
            </div>
        </div>
    )
}

export default Modal;