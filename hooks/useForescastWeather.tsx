import { useEffect, useState } from "react";

const useForescastWeather = (lat:string, lon: string) => {
    const [forecastWeather, setForecastWeather] = useState<ForecastInfo[]>([]);
    const [loadingForecastWeather, setLoading] = useState(true);
    const [errorForecastWeather, setErrorForecastWeather] = useState(false);

    const getForecastByDay = (forecast: Forecast): ForecastByDay => {
      return forecast.list.reduce((acc: ForecastByDay, currentValue) => {
        const date = new Date(currentValue.dt_txt).toLocaleDateString();
        if (!Object.hasOwn(acc, date)) {
          acc[date] = [];
        }
        acc[date].push(currentValue);
        
        return acc;
      }, {});
    }

    const getForecastInfo = (forecastByDay: ForecastByDay): ForecastInfo[] => {
      return Object.keys(forecastByDay).map((key: string) => {
        const info = forecastByDay[key].reduce((acc: ForecastInfo, currentValue: ForecastList) => {
          if(!acc.temp_min && !acc.temp_max) {
            acc.temp_min = currentValue.main.temp;
            acc.temp_max = currentValue.main.temp;
          } else {
            if(acc.temp_min > currentValue.main.temp) {
              acc.temp_min = currentValue.main.temp;
            }
            
            if (acc.temp_max < currentValue.main.temp) {
              acc.temp_max = currentValue.main.temp;
            }
          }

          acc.weather = currentValue.weather[0].main;
          acc.description = currentValue.weather[0].description;
                      
          return acc;
        }, {
          date: key,
          weather: '',
          temp_min: 0,
          temp_max:  0,
          description: ''
        });

        return info
      });
    }
  
    useEffect(() => {
      async function fetchForecast(){
        const resp = await fetch(`/api/forecast-weather?lat=${lat}&lon=${lon}`);
        const forecast = await resp.json();
        if(forecast.status !== "200") {
          setErrorForecastWeather(true);
          return
        }

        const forecastByDay = getForecastByDay(forecast.data);
        const forecastInfo =  getForecastInfo(forecastByDay);
        setForecastWeather(forecastInfo);
        setLoading(false);
      }
  
      try {
        if(lat && lon) {
          fetchForecast();
        }
      } catch (error) {
        console.log(error);
        setErrorForecastWeather(true);
      }
    }, [lat, lon])
    
    return { forecastWeather, loadingForecastWeather, errorForecastWeather}
}

export default useForescastWeather;