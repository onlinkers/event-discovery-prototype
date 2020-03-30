export const eventFinder = (events, query) => {
    const matchingEvents = [];
    events.forEach((event) => {
        if(event.name.toLowerCase().search(query.toLowerCase()) !== -1) {

            // Transform into carmen GeoJSON format
            // https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
            const matchingEvent = {
                type: "Feature",
                // id: '', (we might need this, might not)
                properties: {
                    title: event.venue.name,
                    description: event.description,
                },
                geometry: event.venue.location,
                text: event.venue.name,
                place_name: event.name,
                center: event.venue.location.coordinates,
                place_type: ['event'], // figure out what to put here
            };

            matchingEvents.push(matchingEvent);
        }
    });

    return matchingEvents;
}