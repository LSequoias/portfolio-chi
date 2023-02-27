import React, { Suspense } from "react";
import Layouts from "../layouts/Layouts";

// components
import Sidebar from "../components/Sidebar/Sidebar";
const Gallery = React.lazy(() => import("../components/Gallery/Gallery"));

// data
import expositionData from './../params/expositionData';

import useStyles from "./style";


const Exposition = () => {
    const classes = useStyles();

    return (
        <Layouts>
            <section className={classes.exposition}>
                <Sidebar data={expositionData}/>
                <Suspense fallback={
                    <div>
                        en attente
                    </div>
                    }>
                    <Gallery data={expositionData} />
                </Suspense>
            </section>
        </Layouts>
    );
}

export default Exposition;