import { Add_To_Cart } from '../Constant'
import { Remove_To_Cart } from '../Constant'
const initialState = {
    cardData: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case Add_To_Cart:
            console.warn("reducer", action)
            return [
                ...state,
                {cardData: action.data}
            ]
            break;
        case Remove_To_Cart:
            state.pop()
            return [
                ...state
            ]
        break;
        default:
            return state


    }
}