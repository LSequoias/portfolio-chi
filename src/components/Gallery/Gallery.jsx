import React, {useState} from "react";

import useStyles from "./style";

const Gallery = ({data}) => {
    const classes = useStyles();
    
    return (
        <div className={classes.gallery}>
            <div className={classes.wrap}>
                {/* Modal */}

                {/* end moda */}

                {
                    data.map((image, k) => (
                    <div className={classes.box} key={k}>
                        <figure className={classes.noMarge}>
                            <img
                                className={classes.picture}
                                src={image.url}
                                alt={image.textAlter}
                                title={image.hoverText}
                                />
                        </figure>
                    </div>
                    ))
                }
            </div>
        </div>
    )
            }

export default Gallery;