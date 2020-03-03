
import apiWeather from '../apiWeather'

const logic = {

    searchForCity(query) {
        // todo validate
        return apiWeather.searchForCity(query)
    }

}

export default logic