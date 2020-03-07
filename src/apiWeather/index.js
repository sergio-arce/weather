
const {  REACT_APP_URL, REACT_APP_KEY } = process.env

const apiWeather = {
    __URL__: REACT_APP_URL, 
    __API_KEY__: REACT_APP_KEY,

    async forecastGeolocation(latitude, longitude) {
        // todo validate latitude, longitude
        const forecast = await fetch(`${this.__URL__}current?lat=${latitude}&lon=${longitude}&key=${this.__API_KEY__}`)
		const response = await forecast.json()
        return response
    },

    async forecastToday(query) {
        // todo validate query
        const forecasts = await fetch(`${this.__URL__}current?city=${query}&key=${this.__API_KEY__}`)
        const response = await forecasts.json()
        const { timezone, ob_time, city_name, last_ob_time, wind_cdir_full, sunrise, sunset, datetime, temp, weather: { icon, description } } = response.data[0]
        const moreDatas = await fetch(`${this.__URL__}forecast/daily?city=${query}&days=2&key=${this.__API_KEY__}`)
        const results = await moreDatas.json()
        const { lon, lat } = results
        const { max_temp, min_temp } = results.data[0]
        return [{ city_name,icon, description, temp, max_temp, min_temp, timezone, ob_time,  last_ob_time, wind_cdir_full, sunrise, sunset, datetime,  lon, lat }]
    },

    async forecastTomorrow(query) {
        // todo validate
        const forecasts = await fetch(`${this.__URL__}forecast/daily?city=${query}&days=2&key=${this.__API_KEY__}`)
        const response = await forecasts.json()
        const { city_name, timezone, lon, lat } = response
        const { max_temp, min_temp, wind_cdir_full, valid_date, weather: { icon, description } } = response.data[0]
        return [{ city_name, timezone, lon, lat, max_temp, min_temp, wind_cdir_full, valid_date, icon, description }]
    },

    async forecastSevenDays(query) {
        // todo validate
        const forecasts = await fetch(`${this.__URL__}forecast/daily?city=${query}&days=7&key=${this.__API_KEY__}`)
        const response = await forecasts.json()
        return response
    },

    async forecastSexteenDays(query) {
        // todo validate
        const forecasts = await fetch(`${this.__URL__}forecast/daily?city=${query}&key=${this.__API_KEY__}`)
        const response = await forecasts.json()
        return response
    },
}
export default apiWeather
