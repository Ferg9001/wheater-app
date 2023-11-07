import { useEffect, useState } from "react";

const useCurrentWeather = (lat:string, lon: string) => {
    const [currentWeather, setCurrentWeather] = useState({} as currentWeather);
    const [loadingCurrentWeather, setLoading] = useState(true);
    const [errorCurrentWeather, setErrorCurrentWeather] = useState(false);
  
    useEffect(() => {
      const fetchWeather = async () => {
        const resp = await fetch(`/api/current-weather?lat=${lat}&lon=${lon}`);
        const weather = await resp.json();
        
        if(weather.status !== 200) {
          setErrorCurrentWeather(true);
          return
        }
        
        setCurrentWeather(weather.data);
        setLoading(false);
      }
  
      try {
        if(lat && lon) {
          fetchWeather();
        }
      } catch (error) {
        console.log(error);
        setErrorCurrentWeather(true);
      }
    }, [lat, lon])
    return { currentWeather, loadingCurrentWeather, errorCurrentWeather}
}

export default useCurrentWeather;