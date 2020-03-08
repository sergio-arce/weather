
import apiWeather from '../apiWeather'

const logic = {
    /**
     * 
     * @param { number } latitude 
     * @param { number } longitude 
     */
    forecastGeolocation(latitude, longitude) {
        if (typeof latitude !== 'number') throw Error('latitude geolocation is not a number')
        if (typeof longitude !== 'number') throw Error ('longitude geolocation is not a number')
        
        return apiWeather.forecastGeolocation(latitude, longitude)
    },
    /**
     * 
     * @param { string } query 
     */
    forecastToday(query) {
        if (typeof query !== 'string') throw TypeError('query today is not a string')
        if (!query.trim().length) throw Error('query today is empty') 

        return apiWeather.forecastToday(query)
    },
    /**
     * 
     * @param { string } query 
     */
    forecastTomorrow(query) {
        if (typeof query !== 'string') throw TypeError('query tomorrow is not a string')
        if (!query.trim().length) throw Error('query tomorrow is empty')

        return apiWeather.forecastTomorrow(query)
    },
    /**
     * 
     * @param {string} query 
     */
    forecastSevenDays(query) {
        if (typeof query !== 'string') throw TypeError('query seven-days is not a string')
        if (!query.trim().length) throw Error('query seven-days is empty')

        return apiWeather.forecastSevenDays(query)
    },
    /**
     * 
     * @param { string } query 
     */
    forecastSexteenDays(query) {
        if (typeof query !== 'string') throw TypeError('query sexteen-days is not a string')
        if (!query.trim().length) throw Error('query sexteen-days is empty')

        return apiWeather.forecastSexteenDays(query)
    }
}
export default logic