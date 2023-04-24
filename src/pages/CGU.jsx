import Layouts from "../layouts/Layouts";
import useStyles from "./style";

// react icons
import {BsTelephoneInbound} from "react-icons/bs";

const CGU = () => {
    const classes = useStyles();
    return (
        <Layouts>
            <section className={classes.presentation}>
                <h2 className={classes.title}>Page CGU</h2>
                <div className={classes.contentBlock}>
                    <article className={classes.block}>
                        <h3 className={classes.subtitle}>Hébergeur et Responsabilité</h3>
                        <p>
                            Ce site est hébergé par la société à responsabilité limitée&nbsp;
                            <a href="https://www.alwaysdata.com/fr/" title="vous redirige vers ce service." target="_blank" className={classes.link}>Alwaysdata</a>,
                            ayant son siège social au 91 rue du Faubourg Saint-Honoré, 75008 Paris.
                        </p>
                        <p>
                            <BsTelephoneInbound />&nbsp;<span className={classes.over} title="remplacer [dot] par point">[dot]</span> +33 1 84 16 23 40
                        </p>
                         <p>
                            <a href="https://www.alwaysdata.com/fr/" title="vous redirige vers ce service." target="_blank" className={classes.link}>AlwaysData</a>
                            &nbsp;n'est pas tenue responsable du contenue diffusée sur ce site et de son créateur. Le créateur se doit 
                            de respecter la réglementation en rigueur de RGPD si le status du site évolue. À ce jour, ce site est hébergé
                            par une personne physique sur le plan juridique.
                         </p>
                    </article>
                    <article className={classes.block}>
                        <h3 className={classes.subtitle}>Droit d'auteur et diffusion.</h3>
                        <p>
                            Les images attribuées par défaut sur ce site proviennent de licences CreativeCommons, l'attribution est valide
                            tant que ces images ne sont pas utilisée à des fin commerciale. L'auteur du site devras appliquée un filigrane sur 
                            chacunes de ces images afin de protéger ces créations. Les images exposée par défaut dans la galeries ne dispose d'aucun
                            filigrane en raison de leurs nature (CreativeCommons). 
                        </p>
                        <p>Le logo du site est réservée à l'auteur du site, aucune attribution sans l'accord du propriétaire n'est autorisée.</p>
                    </article>
                </div>

            
            </section>
        </Layouts>
    )
}

export default CGU;