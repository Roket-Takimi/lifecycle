export const initialState = [
    {id: 1, title: "deneme", content: "öylesine"}
]

export const reducer = (state, {type, option}) => {
    switch(type){
        case "ADD":
            return [...state, {
                id: Math.random(), 
                title:option.title, 
                content:option.content}]
        case "REMOVE":
            return [...state.filter((activitie) => option !== activitie.id)]
        case "UPDATE":
            return state.map(record => {
                if(option.id === record.id)
                    return option
                else
                    return record
            })
        default:
            return state 
    }
    
}