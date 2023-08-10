export const getParams = () => {
    const {search} = window.location // ?id=3&page=3&num=3
    if (!search.length) return null;
    const queryString = search.slice(1).split("&")
    // id=3&page=3&num=3 -> ['id=3', 'page=3', 'num=3']

    // filter
    // map
    // reduce -> type conversion
    return queryString.reduce((accumulator, currentValue) => {
        const [key, value] = currentValue.split("=") // ["id","11"]
        accumulator[key] = value
        return accumulator
    }, {})


        /* {
        id:3,
        page:3,
        num:3,
    } */
}