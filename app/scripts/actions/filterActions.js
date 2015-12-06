/**
 * Created by Joyce on 12/6/2015.
 */
export const SET_FILTER = "SET_FILTER";

export function setFilter(filter){
    return {
        type: SET_FILTER,
        filter
    }
}

export default { setFilter }