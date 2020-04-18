export const filterEventsByCategoryKeys = (events, selectedKeys = []) => {
    // If no 'selectedKeys' provided, return the entire events list
    if(!selectedKeys.length) return events
    return events.filter((event) => (
        // check if at least one of the event's categories exists in the selected keys list
        event.categories.some((category) => selectedKeys.includes(category))
    ));
}

// assumes event.startDate is provided in ISO 8601 format
// assumes dates is an array of 'from' and 'to' in yyyy-mm-dd format (from input, unknown order)
export const filterEventsByDates = (events, dates = []) => {
    // If no 'dates' provided, return the entire events list
    if(!dates || !dates[0] || !dates[1]) return events

    // parse input dates (month goes from 0 - 11)
    let d1 = dates[0].split('-')
    d1 = new Date(d1[0], parseInt(d1[1]) - 1, d1[2])

    let d2 = dates[1].split('-')
    d2 = new Date(d2[0], parseInt(d2[1]) - 1, d2[2])

    return events.filter((event) => {

        const eventStartDate = new Date(event.startDate)
        // check if event startDate is between the the two dates
         return eventStartDate >= d1 && eventStartDate < d2 || eventStartDate >= d2 && eventStartDate < d1
    });
}

export const filterEventsByRating = (events, rating = '') => {
    // If no 'dates' provided, return the entire events list
    if(!rating) return events

    return events.filter((event) => (
        parseInt(event.rating) === rating
    ));
}