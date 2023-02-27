
export const GalleryReducer = (state, action) => {

    const choice = [
        {whatAction: "abstraite"}, 
        {whatAction: "mono"}
    ];


    function* generateAction() {
        for (const el of choice) {
            yield el;
        }
    }

    const seed = generateAction();

    switch (action.type) {
        case seed.next() :
            
        
        default:
            return state;
    }
}