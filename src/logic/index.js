
import apiWeather from '../apiWeather'

const logic = {
    forecastGeolocation(latitude, longitude) {
        // todo validate latitude, longitude
        return apiWeather.forecastGeolocation(latitude, longitude)
    },

    forecastToday(query) {
        // todo validate query
        return apiWeather.forecastToday(query)
    },
    forecastTomorrow(query) {
        // todo validate query
        return apiWeather.forecastTomorrow(query)
    },
    forecastSevenDays(query) {
        // todo validate query
        return apiWeather.forecastSevenDays(query)
    },
    forecastSexteenDays(query) {
        return apiWeather.forecastSexteenDays(query)
    }
}

export default logic