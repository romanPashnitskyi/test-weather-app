## Weather Web App

This app received the temperature and humidity at the user's current location (used browser geolocation API) from the OpenWeatherMap API: https://openweathermap.org/forecast16

### Routes
- `/` - forecast screen: this screen show the temperature and humidity retrieved from OpenWeatherMap.
- `/settings` - this screen contain have settings like Refresh Location and option to change default units (celsius or fahrenheit)

### Stack
-	react
-	redux(redux-thunk, redux-logger)
-	react-router
