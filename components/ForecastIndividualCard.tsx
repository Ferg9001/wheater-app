import { getIconByWeather, getTemp } from '@/utils/weather-card-utils';
import ConfigIcon from './ConfigIcons';

const ForecastIndividualCard: React.FC<ForecastCard> = ({forecastInfo}) => {
    const { icon } = getIconByWeather(forecastInfo.weather);
    const dateText = new Date(forecastInfo.date).toLocaleDateString('es-ES', { weekday: 'long' });
    
    return <li className='p-2 flex flex-col gap-2 items-center border-r last:border-0'>
        <div>{dateText}</div>
        <div className='p-4'>
            <ConfigIcon size="60">
                {icon}
            </ConfigIcon>
        </div>
        <div className='flex md:flex-row flex-col items-center md:gap-8 gap-4'>
            <div className='text-center md:w-min'>
                <div>{getTemp(forecastInfo.temp_max)}</div>
                <div>{getTemp(forecastInfo.temp_min)}</div>
            </div>
        </div>
        <div className='text-md text-center'>{forecastInfo.description}</div>    
    </li>
}

export default ForecastIndividualCard;