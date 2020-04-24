
// Filters out an array of categories which exist in the filterArray
export const filterArrayByArray = (categories, filterArray = []) => {
    if(!filterArray.length) return categories
    return categories.filter((category) => {
        return !filterArray.includes(category)
    });
}