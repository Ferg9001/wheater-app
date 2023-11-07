import useForescastWeather from '@/hooks/useForescastWeather';
import ForecastIndividualCard from './ForecastIndividualCard';
import Loading from './Loading';

const ForecastCards: React.FC<Igeolocation> = ({lat, lon}) => {
    const {forecastWeather, loadingForecastWeather, errorForecastWeather} = useForescastWeather( lat, lon);
        
    return <div className='mt-8'>
        <div className='pb-2 '>Pronóstico</div>
        <hr className='mb-4'/>
        {
            loadingForecastWeather || !forecastWeather ? 
            <div className="mt-8 flex justify-center">
                {errorForecastWeather ? "Oops algo salio mal" : <Loading/>}
            </div> :
            <ul className='flex gap-2 md:justify-center overflow-x-scroll max-w-min justify-start'>
                {
                    Object.values(forecastWeather).map((forecastInfo:ForecastInfo, key: number) => {
                        return <ForecastIndividualCard forecastInfo={forecastInfo} key={key}/>
                    })
                }
            </ul>
        }
    </div>
}

export default ForecastCards;