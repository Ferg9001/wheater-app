import {
    FaCloudShowersHeavy,
    FaCloudBolt,
    FaWind,
    FaRegSnowflake,
    FaCloud,
    FaSun,
    FaTornado,
} from 'react-icons/fa6';
import {
    RiMistFill
} from 'react-icons/ri';

type weatherCondition = {
    icon: JSX.Element
}

interface IweatherConditions {
    [name: string]: weatherCondition
}

const weatherConditions: IweatherConditions = {
    'Rain': {
        'icon': <FaCloudShowersHeavy className={'text-darkblue'}/>
    },
    'Clouds': {
        'icon': <FaCloud className={'text-darkgray'}/>
    },
    'Clear': {
        'icon': <FaSun className={'text-orange'}/>
    },
    'Mist': {
        'icon': <RiMistFill className={'text-darkgray'}/>
    },
    'Smoke': {
        'icon': <RiMistFill className={'text-darkgray'}/>
    },
    'Haze': {
        'icon': <RiMistFill className={'text-darkgray'}/>
    },
    'Dust': {
        'icon': <RiMistFill className={'text-orange'}/>
    },
    'Fog': {
        'icon': <RiMistFill className={'text-darkgray'}/>
    },
    'Sand': {
        'icon': <FaWind className={'text-orange'}/>
    },
    'Ash': {
        'icon': <RiMistFill className={'text-darkgray'}/>
    },
    'Squall': {
        'icon': <RiMistFill className={'text-darkgray'}/>
    },
    'Tornado': {
        'icon': <FaTornado className={'text-darkgray'}/>
    },
    'Snow': {
        'icon': <FaRegSnowflake className={'text-white'}/>
    },
    'Drizzle': {
        'icon': <FaCloudShowersHeavy className={'text-darkgray'}/>
    },
    'Thunderstorm': {
        'icon': <FaCloudBolt className={'text-white'}/>
    }
  }


export function getIconByWeather(weather: string): weatherCondition {
    return weatherConditions[weather];
}

export const getTemp = (temp:number) => {
    return Math.ceil(temp) + 'º';
}