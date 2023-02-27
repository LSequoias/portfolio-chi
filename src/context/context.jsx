import { createContext, useReducer } from "react";
import { GalleryReducer } from "./reducers";
import { useContext } from "react";

const Picture = createContext();

const ContextPicture = ({children}) => {
    
    const [state, dispatch] = useReducer(GalleryReducer, {
        Picture: [],
    });
    
    return (
        <Picture.Provider value={{state, dispatch}}>
            {children}
        </Picture.Provider>
    )
}
export default ContextPicture;


export const PictureState = () => {
    return useContext(Picture)
}