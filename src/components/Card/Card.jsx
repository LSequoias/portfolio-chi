import React from 'react';
import useStyles from './style';


const Card = props => {
    
    const classes = useStyles();
    const nofound = {
        media: "/media/images/noimage.png",
        mediaTxt: "aucune ressources trouvée."
    };

    return (
        <>
            <article className={classes.expo}>
            {
                props.data.map((expo, k) => (
                    <figure key={k} className={classes.card}>
                        {
                        !!expo.media ? (
                                <img className={classes.cardMedia} 
                                    src={expo.media} 
                                    alt={expo.mediaTxt} 
                                    title={expo.mediaTxt}
                                />
                            ) : (
                                <img className={classes.cardMedia}
                                    src={nofound.media} 
                                    alt={nofound.mediaTxt} 
                                    title={nofound.mediaTxt}
                                />
                            )
                        }
                    </figure>
                ))
            }
            </article>
        </>

    );
}

export default Card;