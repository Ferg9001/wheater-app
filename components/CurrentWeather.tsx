import WheaterCard from "@/components/WeatherCard";
import SideWeatherCards from "@/components/SideWeatherCards";
import Loading from './Loading';
import useCurrentWeather from "@/hooks/useCurrentWeather";
import {
    FaRegFaceFrown,
    FaCloudShowersHeavy
} from 'react-icons/fa6';

const CurrentWeather: React.FC<Igeolocation> = ({lat, lon}) => {
    const {currentWeather, loadingCurrentWeather, errorCurrentWeather} = useCurrentWeather( lat, lon);

    if(errorCurrentWeather){
        return <div className="flex flex-col justify-center items-center gap-4">
            Oops! ocurrio un error
            <FaCloudShowersHeavy size={60}/>
            <FaRegFaceFrown size={40}/>
        </div>
    }

    if(loadingCurrentWeather || !currentWeather) { 
        return <div className="mt-8 flex justify-center">
            <Loading/>
        </div>
    }

    return <div className="md:flex md:gap-4 justify-center">
      <WheaterCard currentWeather={currentWeather}/>
      <SideWeatherCards currentWeather={currentWeather}/>
    </div>
}

export default CurrentWeather;