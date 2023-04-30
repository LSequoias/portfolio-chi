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
        //console.log(modalData, getModal);
    }


    const validation = {

        correctif: {
            0: function(property) {
                property.title = property.url.lastIndexOf("/") + 1;
                let filename = property.url.substr(property.title);
                filename = filename.split(".")[0];
                property.title = filename;
            },
            1: function(property) {
                property.textAlter = property.title;
            },
            2: function(property) {
                property.hoverText = `voir d'avantage: ${property.title}`;
            },
            3: function(property) {
                property.url = "./media/images/noimage.png";
            },
            4: function(property) {                     
                let numberOfChar = property.url.lastIndexOf("/") + 1;
                let filename = property.url.substr(numberOfChar);
                console.warn(`${filename.split(".")[1]} n'est pas une extension valide pour l'image ${filename}`);
            },
            5: function(property) {
                property.description[0].subtitle = property.title;
            },
            6: function(property) {
                property.description[0].paragraph = "La description viendra, soyez patient.";
            }
        }
    }

    
    const generatePicture = () => {

        function* init() {
            yield checkCollection(data);
            yield checkInformation();
        }

        const seed = init();

        // if false ..iteration suivante
        if(!seed.next().done) {
            seed.next();
        }

        /** 
         * @param {Object} objectData Il s'agit d'un objet Js et non JSON.  
         * @returns {(Object | null)} 
         */
        function checkCollection(objectData) {
            try {
                if(objectData.length === 0 || objectData === null || objectData === undefined) {
                    throw new Error("Aucune collection trouvée pour la galerie.")
                }

                return objectData;
                
            } catch(error) {
                
                console.error(error.message);
                return null;
            }
        }


        // <!> tags est gérée par la sidebar
        function checkInformation() {
            for (const element of data) {

                if(!element.title || element.title.trim().length < 1) {
                    validation.correctif[0](element);
                }

                if(!element.textAlter || element.textAlter.trim().length === 0) {
                    validation.correctif[1](element);
                }
                
                if(!element.hoverText || element.hoverText.trim().length === 0) {
                    validation.correctif[2](element);
                }

                if(!element.url.trim()) {
                    validation.correctif[3](element);
                } else if(element.url.match(/\.(jpeg|jpg|gif|png)$/) === null) {
                    validation.correctif[4](element);
                    validation.correctif[3](element);
                }

                if(!element.description[0].subtitle || element.description[0].subtitle.trim(). length === 0) {
                    validation.correctif[5](element);
                }

                if(!element.description[0].paragraph || element.description[0].paragraph.trim(). length === 0) {
                    validation.correctif[6](element);
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