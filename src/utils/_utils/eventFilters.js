export const filterEventsByCategoryKeys = (events, selectedKeys = []) => {
    // If no 'selectedKeys' provided, return the entire events list
    if(!selectedKeys.length) return events
    return events.filter((event) => (
        // check if at least one of the event's categories exists in the selected keys list
        event.categories.some((category) => selectedKeys.includes(category))
    ));
}
