
import WheaterSimpleCard from "@/components/WeatherSimpleCard";
import {
    FaWind,
    FaEye,
    FaDroplet
} from 'react-icons/fa6';

const SideWeatherCards: React.FC<weatherCard> = ({currentWeather}) => {
    return <aside className="flex mt-2 justify-start overflow-x-scroll md:justify-center md:m-0 md:flex-col gap-2 items-stretch">
        <WheaterSimpleCard title='Visibilidad' value={`${currentWeather.visibility}km`}>
            <FaEye size={30}/>
        </WheaterSimpleCard>
        <WheaterSimpleCard title='Humedad' value={`${currentWeather.main.humidity}%`}>
            <FaDroplet size={30}/>
        </WheaterSimpleCard>
        <WheaterSimpleCard title='viento' value={`${currentWeather.wind.speed}km/h`}>
            <FaWind size={30}/>
        </WheaterSimpleCard>
    </aside>
}

export default SideWeatherCards;