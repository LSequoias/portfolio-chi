import { createUseStyles } from "react-jss";

import vector from '/media/svg/Wave_Line.svg';


const useStyles = createUseStyles({
    main: {
        backgroundImage:`url(${vector})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
    },
});


export default useStyles;