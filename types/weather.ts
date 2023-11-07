interface currentWeather {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number,
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number;
}

type weatherCondition = {
    icon?: JSX.Element,
    color: string
}

interface IweatherConditions {
    [name: string]: weatherCondition
}

interface IgeolocationResponse {
    name: string;
    local_names?: {
      [index:string]: string
    };
    lat: number;
    lon: number;
    country: string;
    state?: string;
}

interface Igeolocation {
    lat: string;
    lon: string;
}

interface weatherCard {
    currentWeather: currentWeather
}

interface ForecastCards {
    forecastInfo: ForecastInfo[],
    loading: boolean
}

interface ForecastInfo {
    date: string,
    weather: string
    temp_min: number,
    temp_max: number,
    description: string
  }
  
  interface ForecastByDay {
    [key:string]: ForecastList[]
  }

interface ForecastCard {
    forecastInfo: ForecastInfo,
}

interface ForecastList {
    dt: number,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        sea_level: number,
        grnd_level: number,
        humidity: number,
        temp_kf: number
    },
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[],
    clouds: {
        all: number
    },
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    visibility: number,
    pop: number,
    rain?: Object,
    sys: Object,
    dt_txt: string
}

interface Forecast {
    cod: string,
    message: number,
    cnt: number,
    list: ForecastList[],
    city: {
        id: number,
        name: string,
        coord: {
            lat: number,
            lon: number
        },
        country: string,
        population: number,
        timezone: number,
        sunrise: number,
        sunset: number
    }
}