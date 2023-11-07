import {mockedWeatherData} from "@/mocked-data/weather";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const lat = searchParams.get('lat')
    const lon = searchParams.get('lon')

    if (process.env.ENVIROMENT == 'dev') {
        return Response.json({ data: mockedWeatherData });
    }
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHERMAP_API_KEY}&units=metric&lang=es`);
    const data = await res.json();
    return Response.json({ data, status: data.cod })
}