
const {  REACT_APP_URL, REACT_APP_KEY } = process.env

const apiWeather = {
    __URL__: REACT_APP_URL, 
    __API_KEY__: REACT_APP_KEY,
    /**
     * 
     * @param { number } latitude 
     * @param { number } longitude 
     */
    async forecastGeolocation(latitude, longitude) {
        if (typeof latitude !== 'number') throw TypeError('latitude geolocation is not a number')
        if (typeof longitude !== 'number') throw TypeError('longitude geolocation is not a number')

        const forecast = await fetch(`${this.__URL__}current?lat=${latitude}&lon=${longitude}&key=${this.__API_KEY__}`)
		const response = await forecast.json()
        return response
    },
    /**
     * 
     * @param { string } query 
     */
    async forecastToday(query) {
        if (typeof query !== 'string') throw TypeError('query today is not a string')
        if (!query.trim().length) throw Error('query today is empty')

        const forecasts = await fetch(`${this.__URL__}current?city=${query}&key=${this.__API_KEY__}`)
        const response = await forecasts.json()
        const { timezone, ob_time, city_name, last_ob_time, wind_cdir_full, sunrise, sunset, datetime, temp, weather: { icon, description } } = response.data[0]
        const moreDatas = await fetch(`${this.__URL__}forecast/daily?city=${query}&days=2&key=${this.__API_KEY__}`)
        const results = await moreDatas.json()
        const { lon, lat } = results
        const { max_temp, min_temp } = results.data[0]
        return [{ city_name,icon, description, temp, max_temp, min_temp, timezone, ob_time,  last_ob_time, wind_cdir_full, sunrise, sunset, datetime,  lon, lat }]
    },
    /**
     * 
     * @param { string } query 
     */
    async forecastTomorrow(query) {
        if (typeof query !== 'string') throw TypeError('query tomorrow is not a string')
        if (!query.trim().length) throw Error('query today is empty')

        const forecasts = await fetch(`${this.__URL__}forecast/daily?city=${query}&days=2&key=${this.__API_KEY__}`)
        const response = await forecasts.json()
        const { city_name, timezone, lon, lat } = response
        const { max_temp, min_temp, wind_cdir_full, valid_date, weather: { icon, description } } = response.data[0]
        return [{ city_name, timezone, lon, lat, max_temp, min_temp, wind_cdir_full, valid_date, icon, description }]
    },
    /**
     * 
     * @param { string } query 
     */
    async forecastSevenDays(query) {
        if (typeof query !== 'string') throw TypeError('query seven-days is not a string')
        if (!query.trim().length) throw Error('query seven-days is empty')

        const forecasts = await fetch(`${this.__URL__}forecast/daily?city=${query}&days=7&key=${this.__API_KEY__}`)
        const response = await forecasts.json()
        return response
    },
    /**
     * 
     * @param { string } query 
     */
    async forecastSexteenDays(query) {
        if (typeof query !== 'string') throw TypeError('query sexteen-days is not a string')
        if (!query.trim().length) throw Error('query sexteen-days is empty')

        const forecasts = await fetch(`${this.__URL__}forecast/daily?city=${query}&key=${this.__API_KEY__}`)
        const response = await forecasts.json()
        return response
    },
}
export default apiWeather
