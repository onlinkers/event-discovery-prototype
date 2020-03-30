import { EVENT_CATEGORIES } from '../../constants'

export const filterByCategories = (events, filterArray = []) => {
    if(!filterArray.length) return events
    return events.filter((event) => {
        return filterArray.some((category) => event.categories.indexOf(EVENT_CATEGORIES[category]) > -1)
    });
}


// Filters out an array of categories which exist in the filterArray
export const filterExistingCategoryKeys = (categories, filterArray = []) => {
    if(!filterArray.length) return categories
    return categories.filter((category) => {
        return !filterArray.includes(category)
    });
}