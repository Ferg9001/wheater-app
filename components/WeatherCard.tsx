import { getIconByWeather, getTemp } from '@/utils/weather-card-utils';

import ConfigIcon from './ConfigIcons';

const WheaterCard: React.FC<weatherCard> = ({currentWeather}) => {
    const cWeather = currentWeather.weather[0]
    const { icon } = getIconByWeather(cWeather.main);
    
    return <div className='drop-shadow-xl border-solid border border-black p-4 md:p-8 flex flex-col gap-4 md:gap-6 items-center'>
        <div className='text-2xl'>{currentWeather.name}</div>
        <div className='flex md:flex-row flex-col items-center md:gap-8 gap-4'>
            <div className='text-center md:w-min'>
                <div className='text-6xl md:text-8xl'>{getTemp(currentWeather.main.temp)}</div>
                <div className='text-md'>{`sensacion termica de ${getTemp(currentWeather.main.feels_like)}`}</div>
            </div>
            <ConfigIcon size="120">
                {icon}
            </ConfigIcon>
        </div>
        <div className='text-2xl'>{cWeather.description}</div>    
    </div>
}

export default WheaterCard;