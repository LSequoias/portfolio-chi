import React, { Suspense, useState } from "react";
import Layouts from "../layouts/Layouts";

// components
import Sidebar from "../components/Sidebar/Sidebar";
const Gallery = React.lazy(() => import("../components/Gallery/Gallery"));

// data
import expositionData from './../params/expositionData';

import useStyles from "./style";


const Exposition = ({name}) => {
    const classes = useStyles();

    const [filterImg, setFilterImg] = useState(expositionData);

      function handleFilter(setData, name) {
        if(name === undefined) {
          setFilterImg(expositionData)
        } else {
          setFilterImg(setData)
        }
      }

    return (
        <Layouts>
            <section className={classes.exposition}>
                <Sidebar data={expositionData} handleFilter={handleFilter} name={name}/>
                <Suspense fallback={
                    <div>
                        en attente
                    </div>
                    }>
                    <Gallery data={filterImg} />
                </Suspense>
            </section>
        </Layouts>
    );
}

export default Exposition;