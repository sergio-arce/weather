
// const __URL__ = 'http://api.openweathermap.org/data/2.5/weather?'
// http://api.openweathermap.org/data/2.5/weather?     q=      barcelona    &appid=  9cecc947a2e1f14a1ff4a8f0b5fd9063


// accuweather
// apikey 	NgGWwkK4AwlS3djVLPkxl02G5tRojyWC

// dark dky api   apikey d75d316d743cfd58cdbc28ed5e952a06

const apiWeather = {
    __API__kEY__: '9cecc947a2e1f14a1ff4a8f0b5fd9063',
    __URL__: 'http://api.openweathermap.org/data/2.5/weather?', 

    searchForCity(query) {
        // todo validate
        return fetch(`${this.__URL__}q=${query}&appid=${this.__API__kEY__}`)
            .then(resp => resp.json())
            .then(resp => resp)
    }


}

export default apiWeather
