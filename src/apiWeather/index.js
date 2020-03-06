
// todo url and api_key desde proces.env

const apiWeather = {
    __URL__: 'https://api.weatherbit.io/v2.0/', 
    __API_KEY__: 'e66c10579e7f43d6b80819c7dd3c9d20',

    async forecastToday(query) {
        // todo validate query
        const forecasts = await fetch(`${this.__URL__}current?city=${query}&key=${this.__API_KEY__}`)
        const resp = await forecasts.json()
        const { weather:{ icon, description }, city_name, sunset, timezone, ob_time, last_ob_time, wind_cdir_full } = resp.data[0]

        const moreDatas = await fetch(`${this.__URL__}forecast/daily?city=${query}&days=2&key=${this.__API_KEY__}`)
        const results = await moreDatas.json()
        const { lon, lat, country_code } = results
        const { max_temp, min_temp } = results.data[0]

        return { city_name, icon, description, sunset, timezone, ob_time, last_ob_time, wind_cdir_full, lon, lat, country_code, max_temp, min_temp }
    },

    forecastTomorrow(query) {
        // todo validate
        return fetch(`${this.__URL__}forecast/daily?city=${query}&days=2&key=${this.__API_KEY__}`)
            .then(resp => resp.json())
            .then(resp => {
                const { city_name, timezone, lon, lat, country_code } = resp
                const { max_temp, min_temp, wind_cdir_full, valid_date, weather: { icon, description } } = resp.data[0]
                return { city_name, timezone, lon, lat, country_code, max_temp, min_temp, wind_cdir_full, valid_date, icon, description }
            })
    },

    // forecastSevenDays(query) {
    async searchForCity(query) {
        // todo validate
        const forecasts = await fetch(`${this.__URL__}forecast/daily?city=${query}&days=7&key=${this.__API_KEY__}`)
        const results = forecasts.json()
        return results
    },

    forecastSexteenDays(query) {
        // todo validate
        return fetch(`${this.__URL__}forecast/daily?city=${query}&key=${this.__API_KEY__}`)
            .then(resp => resp.json())
            .then(resp => console.log(resp))
    },
}

export default apiWeather






