# FancyCarsTest
The project is for demo/test/educational purposes only. Used one of the possible project structures.

Data state is managed by redux and to handle effects, redux-saga. Usage of the 'frameworks' is done to demonstrate ability of scalability even though it's clear that using redux-saga is overkill here.
## API
Marketcheck APIs is used to get list of cars. Availability service is mocked on API layer without any library used.
## Data sorting
Decided to use server(API) side sorting to support infinite scrolling. Because of same reason sorting by availability is not implemented, by considering requirement of having that as a bad design/UX decision.
## Offline
Very limited offline capability is implemented by saving retrieved data (not images) into device storage. No DBs are used for that. Assumption is that offline is needed to handle temporary connection outages. Some libs can be used to handle caching of the images as well.
## Tests
Placeholders are prepared for unit and UI verification tests. No tests are written.
