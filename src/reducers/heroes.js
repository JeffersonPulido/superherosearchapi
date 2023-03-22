import { SHOW_HEROES } from "../actions";

const initialState = {
    list: []
}

export function showHeroes(state = initialState, action) {
    switch (action.type) {
        case SHOW_HEROES:
            return Object.assign({}, state, {list: action.payload})
            break;
        default:
            return state
            break;
    }
}   