import React, {useState} from "react";

// components
import Modal from "./../Modal/Modal";
import useStyles from "./style";

const Gallery = ({data}) => {
    const classes = useStyles();

    const [modalData, setModalData] = useState({});
    const [getModal, setModal] = useState(false);


    const getImg = (image) => {
        setModal(true);
        setModalData(image);
        console.log(modalData, getModal);
    }

    

/******************************************************** */
    const messageLog = {
        errorLog: {
            0: "Aucun Document de trouvée, vérifier le contenue de la collection.",
            1: function() {
                console.log("Un Document n'as pas reçue de titre");
            },
            2: function(params) {
                console.log(`${params.substr(15)} => Ce format est incorrecte pour une image.`)
            }
            },
        correctif: {
            0: function(params) {
                // image de secours.
                params.url = "./media/images/noimage.png";
            },
                // texte de secours.
            1: function(params) {
                params.hoverText = "Cliquez sur l'image";
            },
                // texte alternatif de l'image
            2: function(params) {    
                params.textAlter = params.title;
            }
        }
    };
                
    const generatePicture = () => {

        function* init() {
            yield checkData(data);
            yield checkInformation();
        }

        const seed = init();

        // if false 
        if(!seed.next().done) {
            seed.next();
        }

        function checkData(objectData) {
            if(objectData.length === 0)
                console.warn(messageLog.errorLog[0]);
        }

        // tags est gérée par la sidebar
        function checkInformation() {
            console.log("passe")
            for (const element of data) {

                if(!element.title.trim()) {
                    // definir un titre par defaut en prenant en compte le nom de l'image
                    // le corectif du texte alternatif se base sur le titre
                    messageLog.errorLog[1]();
                }
                
                if(!element.url.trim()) {
                    messageLog.correctif[0](element);
                } else if(element.url.match(/\.(jpeg|jpg|gif|png)$/) === null) {
                    messageLog.errorLog[2](element.url);
                    messageLog.correctif[0](element);
                }

                if(!element.hoverText.trim()) {
                    messageLog.correctif[1](element);
                }

                if(!element.textAlter.trim()) {
                    messageLog.correctif[2](element);
                }
            }
        }

        //end generator and no ex exception then..
        if(seed.next().done) {
            const getGallery = data.map((image, k) => (

                <div className={classes.box} key={k}>
                    <figure className={classes.noMarge} onClick={() => getImg({image}, k)}>
                        <img
                            className={classes.picture}
                            src={image.url}
                            alt={image.textAlter}
                            title={image.hoverText}
                        />
                    </figure>
                </div>
            ));

            return getGallery;
        }
        
    }
    
    return (
        <div className={classes.gallery}>
            <div className={classes.wrap}>
                {/* Modal */}
                {getModal ? <Modal modalData={modalData}/> : ""}

                {/* end moda */}
                {generatePicture()}
                
            </div>
        </div>
    )

}
export default Gallery;