import { EVENT_CATEGORIES } from '../../constants'

export const filterEventByCategories = (events, filterArray = []) => {
    if(!filterArray.length) return events
    return events.filter((event) => {
        return filterArray.some((category) => event.categories.indexOf(EVENT_CATEGORIES[category]) > -1)
    });
}
