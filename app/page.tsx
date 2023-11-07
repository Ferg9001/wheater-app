"use client"
import SearchBox from "@/components/SearchBox";
import { useState } from "react";
import ForecastCard from "@/components/ForecastCards";
import CurrentWeather from "@/components/CurrentWeather";


export default function Home() {
  const [geolocationSelected, setGeolocationSelected] = useState({
    lat: '',
    lon: ''
  });

  return (
    <main className='mx-10 my-8 flex flex-col gap-4 items-stretch md:items-center'>
      <SearchBox setGeolocationSelected={setGeolocationSelected}/>
      <div className="flex flex-col">     
        { 
          geolocationSelected.lat && geolocationSelected.lon ? 
            <>
              <CurrentWeather lat={geolocationSelected.lat} lon={geolocationSelected.lon}/>
              <ForecastCard lat={geolocationSelected.lat} lon={geolocationSelected.lon}/>
            </>
          :
          <div>Ingresa algun lugar en el mundo...</div>
        }
      </div>
    </main>
  )
}
